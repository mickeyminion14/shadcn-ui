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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import styles from "./contact.module.scss";
import ArrowRight from "../../_icons/arrow-right";
import EmailIcon from "../../_icons/email";
import UserIcon from "../../_icons/user";
import RoleIcon from "../../_icons/role";
import PhoneIcon from "../../_icons/phone";
import MessageIcon from "../../_icons/message";
import HttpService from "../../../../_utils/http.service";
import { useState } from "react";
import { phoneRegex } from "@/lib/constants";
import ButtonLoaderIcon from "@/components/buttonLoader/buttonLoader";

export const http = new HttpService();

const formSchema = z.object({
  fullName: z.string({ required_error: "Full name is required" }).min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  emailAddress: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Email address be a valid email" }),

  role: z.string().nonempty("Role is required"),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .regex(phoneRegex, "Please enter valid mobile number"),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  agree: z.literal<boolean>(true, {
    errorMap: () => ({ message: "Please check the agreement" }),
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const roles = [
    { value: "PLAYER", viewValue: "Player" },
    { value: "COACH", viewValue: "Coach" },
    { value: "GUARDIAN", viewValue: "Guardian" },
    { value: "INSTITUTE", viewValue: "Institute" },
    { value: "RECRUITER", viewValue: "Recruiter" },
  ];
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      role: "",
      phone: "",
      message: "",
      agree: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("payload", values);
    createPost(values);
  }

  const createPost = async (payload: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      console.log("payload", payload);
      const response = await http.post("contact-us", payload);
      console.log("Created post:", response);
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <section id="contactform" className={styles.contactForm}>
      <div className={styles.contactFormContainer}>
        <h2 className={styles.title}>Shoot Us An Email</h2>
        <p className={styles.description}>
          We’ll replay within 2-3 working days
        </p>

        <div className={styles.formWrapper}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className={styles.formGroup}>
                <FormField
                  control={form.control}
                  name="fullName"
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
                  name="emailAddress"
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
                      <FormLabel>Role *</FormLabel>
                      <RoleIcon />
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                  name="phone"
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
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className={styles.formField}>
                    <FormLabel>Main Message</FormLabel>
                    <MessageIcon />
                    <FormControl>
                      <Textarea
                        placeholder="Hey. I would like to report a bug, Thanks"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                      <FormLabel>I Agree to Terms & Conditions</FormLabel>\
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

export default ContactForm;
