"use client"
import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { propertySchema } from "@/schemas";
import { UploadPropertyDetails } from "@/actions/handleProperty";
import { Loader } from "lucide-react";

type PropertyFormData = z.infer<typeof propertySchema>;

export default function Upload() {
    const [isPending, setIsPending] = useState(false);

    const form = useForm<PropertyFormData>({
        resolver: zodResolver(propertySchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            typeId: 0,
            statusId: 0,
            propertyType: "",
            location: {
                streetAddress: "",
                city: "",
                state: "",
                zip: "",
                region: "",
                landmark: "",
                altitude: 0,
                latitude: 0,
            },
            feature: {
                bedrooms: 0,
                bathrooms: 0,
                parkingSpots: 0,
                area: 0,
                hasSwimmingPool: false,
                hasGardenYard: false,
                hasBalcony: false,
            },
            contact: {
                name: "",
                phone: "",
                email: "",
            },
        },
    });
    const { control, handleSubmit } = form;
    const fileRef = form.register("images");
    async function onSubmit(data: PropertyFormData) {
        setIsPending(true);
        console.log("Data", isPending)
        const files = data.images
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("file" + i, files[i]);
        }
        try {
            const res = await UploadPropertyDetails(JSON.stringify(data), formData);
            console.log(res)
        } catch (error) {
            console.log("Errrrr", error)
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50">
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Enter property name"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="propertyType"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property Type</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Enter property type"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="statusId"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>statusId</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="statusIde"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="typeId"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property Type</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Enter property type"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="price"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        type="number"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="5323"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <FormItem className="col-span-full">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-md h-24"
                                        placeholder="Enter description"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        name="location.city"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>city</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="city"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="location.landmark"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>landmark</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="landmark"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="location.region"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Region</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Region"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="location.state"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="State"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="location.streetAddress"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>streetAddress</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="string"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="streetAddress"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="location.zip"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Zip</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="432422"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="location.altitude"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>altitude</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="altitude"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="location.latitude"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>latitude</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="latitude"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="feature.area"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Area</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Area"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="feature.bathrooms"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>bathrooms</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="bathrooms"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="feature.bedrooms"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>bedrooms</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="bedrooms"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="feature.parkingSpots"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>parkingSpots</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value === "" ? undefined : Number(e.target.value)
                                            )
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="parkingSpots"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex space-x-8">
                        <FormField
                            name="feature.hasBalcony"
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>parkingSpots</FormLabel>
                                    <FormControl>
                                        <Input
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.checked ? e.target.value = "on" : e.target.value = "off",
                                                    console.log(e.target.value)
                                                )
                                            }
                                            type="checkbox"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="feature.hasSwimmingPool"
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>hasSwimmingPool</FormLabel>
                                    <FormControl>
                                        <Input
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.checked ? e.target.value = "on" : e.target.value = "off"
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="feature.hasGardenYard"
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>hasGardenYard</FormLabel>
                                    <FormControl>
                                        <Input
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.checked ? e.target.value = "on" : e.target.value = "off"
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    {/* Images */}
                    <FormField
                        name="images"
                        control={control}
                        render={() => (
                            <FormItem>
                                <FormLabel>Upload Images</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        multiple
                                        accept=".png, .jpg, .jpeg, .heic"
                                        className="w-full px-3 py-2 border rounded-md"
                                        {...fileRef}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        name="contact.name"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Enter contact name"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="contact.phone"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Enter contact phone"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="contact.email"
                        control={control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        type="email"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Enter contact email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {isPending ? <Button disabled className="disabled:bg-slate-500" type="submit"><Loader className="animate-spin" /></Button> : <Button type="submit">Upload</Button>}
                </form>
            </Form>
        </div >

    );
};

