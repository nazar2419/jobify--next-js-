"use server";

import prisma from "./db";
import { Prisma } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import {
  JobType,
  createdAndEditJobType,
  createdAndEditJobSchema,
} from "./types";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

function authenticateAndRedirect() {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
}

export async function createJobAction(
  values: createdAndEditJobType
): Promise<JobType | null> {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const userId = authenticateAndRedirect();
  try {
    createdAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,

        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.error(error);
    return null;
  }
}
