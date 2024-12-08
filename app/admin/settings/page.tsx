"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";

import { SettingsSchema } from "@/schemas";

import {
    Switch
} from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import {
    Input
} from "@/components/ui/input";

import { useEffect, useState, useTransition } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

const SettingsPage = () => {

   

    //     S3_ACCESS_KEY_ID="6aa8cade2abe25a4b887ce84c56070fd"
    // S3_SECRET_ACCESS_KEY="e50f3f39069dd98fac54c80febea6988345fa9f20b0910781b26a395ffc9fd3f"
    // S3_ENDPOINT="https://89b3f566c70c063526b6e3e2c704d383.r2.cloudflarestorage.com"
    // S3_REGION="us-east-1"

    // const CLOUDFLARE_ACCOUNT_ID = "89b3f566c70c063526b6e3e2c704d383";
    // const BUCKET_NAME = 'llmbuilder';
    // const IMAGE_NAME = 'shyamraghuonec@gmail.com/xx626b.png';

    // https://llmbuilder.89b3f566c70c063526b6e3e2c704d383.r2.cloudflarestorage.com/shyamraghuonec%40gmail.com/xx626b.png?AWSAccessKeyId=6aa8cade2abe25a4b887ce84c56070fd&Expires=1733501329&Signature=79rJLPkEFMk91frPjDR0mEood4s%3D
    // const imageUrl = `https://${BUCKET_NAME}.${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${IMAGE_NAME}`

    // console.log(imageUrl)
    // React component example
    // https://pub-00aaa27bfca547a1b2bea9c9fd0443bf.r2.dev/shyamraghuonec@gmail.com/sglgax.png,https://pub-00aaa27bfca547a1b2bea9c9fd0443bf.r2.dev/shyamraghuonec@gmail.com/t3xfh1.jpg,https://pub-00aaa27bfca547a1b2bea9c9fd0443bf.r2.dev/shyamraghuonec@gmail.com/qqu5n7.jpg
    return (
        <div>
            <img
                src="https://pub-00aaa27bfca547a1b2bea9c9fd0443bf.r2.dev/shyamraghuonec@gmail.com/qqu5n7.jpg"
                alt="Image Preview"
                style={{ maxWidth: '300px' }}
            />
        </div>
    );
}

export default SettingsPage;