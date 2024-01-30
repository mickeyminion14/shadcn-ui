"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import ArrowRight from "@/components/icons/arrow-right";
import EmailIcon from "@/components/icons/email";
import UserIcon from "@/components/icons/user";
import RoleIcon from "@/components/icons/role";
import PhoneIcon from "@/components/icons/phone";
import styles from "./checkout-form.module.scss";

import HttpService from "@/lib/http-service";
import { useState } from "react";
import { phoneRegex } from "@/lib/constants";
import ButtonLoaderIcon from "@/components/buttonLoader/buttonLoader";
import { toast } from "sonner";
import Link from "next/link";
export const http = new HttpService();

// Design contact us form schema
const formSchema = z.object({
  name: z.string({ required_error: "Full name is required" }).min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Email address be a valid email" }),

  role: z.string().nonempty("Role is required"),
  mobileNo: z
    .string({ required_error: "Phone is required" })
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .regex(phoneRegex, "Please enter valid mobile number"),
  countryCode: z.string(),
  agree: z.boolean().default(true).optional(),
});

const CheckoutForm = ({ defaultValue }: any) => {
  const [loading, setLoading] = useState(false);
  const roles = [
    { value: "PLAYER", viewValue: "Player" },
    { value: "COACH", viewValue: "Coach" },
    { value: "GUARDIAN", viewValue: "Guardian" },
    { value: "INSTITUTE", viewValue: "Institute" },
    { value: "RECRUITER", viewValue: "Recruiter" },
  ];
  // Defined contact us form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: defaultValue?.role || "",
      mobileNo: "",
      countryCode: "+1",
      agree: false,
    },
  });

  // Defined a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    createPost(values);
  }

  const createPost = async (payloadData: z.infer<typeof formSchema>) => {
    if (!payloadData.agree) {
      toast.error(`Please check “Agree to Terms and Conditions”`);
      return;
    }
    try {
      setLoading(true);
      delete payloadData.agree;
      const response = await http.post("checkout", payloadData);
      toast.success("Your query has been submitted.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again");
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="checkoutform" className={styles.contactForm}>
      <div className={styles.contactFormContainer}>
        <h2 className={styles.title}>Complete Your Download</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est
          felis, sagittis viverra .
        </p>

        <div className={styles.formWrapper}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className={styles.formGroup}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className={styles.formField}>
                      <FormLabel>Full Name</FormLabel>
                      <UserIcon />
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className={styles.formField}>
                      <FormLabel>Email Address</FormLabel>
                      <EmailIcon />
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className={styles.formGroup}>
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className={styles.formField}>
                      <FormLabel>Role </FormLabel>
                      <RoleIcon />
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => {
                            return (
                              <SelectItem key={role.value} value={role.value}>
                                {role.viewValue}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobileNo"
                  render={({ field }) => (
                    <FormItem className={styles.formField}>
                      <FormLabel>Phone Number</FormLabel>
                      <PhoneIcon />
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className={styles.formAgreement}>
                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem className={styles.formField}>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className={styles.formLabelTerms}>
                        I Agree to{" "}
                        <Link href={"/terms-and-conditions"}>
                          Terms & Conditions
                        </Link>{" "}
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className={styles.formButtonGroup}>
                <Button
                  type="submit"
                  variant={"primary_outline"}
                  className={styles.buttonAction}
                  disabled={loading}
                >
                  Submit Form
                  {loading ? <ButtonLoaderIcon /> : <ArrowRight />}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
