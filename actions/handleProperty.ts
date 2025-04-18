"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { propertySchema } from "@/schemas";
import { auth } from "@/auth";
import {
    S3Client,
    PutObjectCommand,
} from "@aws-sdk/client-s3";
import { generateId } from "@/lib/utils";

const s3Client = new S3Client({
    region: process.env.S3_REGION!,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
    endpoint: process.env.S3_ENDPOINT,
});


export const UploadPropertyDetails = async (values: string, files: FormData) => {
    try {
        const data: z.infer<typeof propertySchema> = JSON.parse(values);
        const session = await auth();

        if (!session?.user) {
            return { error: "Unauthorized" }
        }


        if (session.user.email !== process.env.ADMIN_EMAIL) {
            return { error: "Unauthorized Admin" }
        }

        const user = await db.user.findFirst({
            where: {
                id: session.user.id!,
                role: "ADMIN",
            }
        });
        if (!user) {
            return { error: "Unauthorized Admin" }
        }
        const urls: string[] = [];
        await Promise.all(
            Array.from(files).map(async (value) => {

                //@ts-ignore
                const fileName = value[1].name.split(".")[1];
                //@ts-ignore
                const arrBuffer = await value[1].arrayBuffer();
                const buffer = Buffer.from(arrBuffer);

                const name = `${session.user.email}/${generateId()}.${fileName}`;
                const url = `https://pub-00aaa27bfca547a1b2bea9c9fd0443bf.r2.dev/${name}`;
                urls.push(url);

                await s3Client.send(
                    new PutObjectCommand({
                        Bucket: process.env.S3_BUCKET_NAME!,
                        Key: name,
                        Body: buffer,
                    })
                );
            })
        );
        const { area, bathrooms, hasBalcony, hasGardenYard, hasSwimmingPool, bedrooms, parkingSpots } = data.feature;
        const { email, name, phone } = data.contact;
        const { altitude, city, landmark, latitude, region, state, streetAddress, zip } = data.location;
        await db.property.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                statusId: data.statusId,
                images: {
                    create: {
                        urls
                    }
                },
                type: {
                    create: {
                        value: data.propertyType
                    }
                },
                location: {
                    create: {
                        altitude,
                        city,
                        landmark,
                        latitude,
                        region,
                        state,
                        zip,
                        streetAddress
                    }
                },
                feature: {
                    create: {
                        area,
                        bathrooms,
                        hasBalcony,
                        hasGardenYard,
                        hasSwimmingPool,
                        bedrooms,
                        parkingSpots,
                        // :data.feature.hasSwimmingPool
                    }
                },
                contact: {
                    create: {
                        email,
                        name,
                        phone
                    }
                }

            }
        })
        return {
            success: "Upload successfully"
        }
    } catch (error) {
        console.log(error)
        return "Internal Server error"
    }
}


export const getPropertyDetails = async () => {
    try {
        const res = await db.property.findMany({
            include: {
                images: true,
                type: true,
                location: true,
                feature: {
                    select: {
                        area: true
                    }
                },
                contact: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return res;
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getPropertyById = async (id: number) => {
    try {
        const res = await db.property.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                description: true,
                name: true,
                price: true,
                statusId: true,
                typeId: true,
                contact: true,
                location: true,
                images: true,
                feature: true,
                type: true

            }
        })
        return res;
    } catch (error) {
        console.log(error)
        return []
    }
}


