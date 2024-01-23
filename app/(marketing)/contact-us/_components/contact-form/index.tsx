"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import styles from "./contact.module.scss";
import ArrowRight from "../../_icons/arrow-right";

const formSchema = z.object({
  fullName: z
    .string()
    .nonempty("Full name is required")
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .optional(),

  emailAddress: z
    .string()
    .nonempty("Email address is required")
    .email({ message: "Email address be a valid email" }),

  role: z.string({
    required_error: "Please select an role.",
  }),
  phone: z.string().nonempty("Phone is required"),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  agree: z.boolean().default(false).optional(),
});

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      role: "",
      phone: "",
      message: "",
      agree: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className={styles.contactForm}>
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
                      <FormControl>
                        <Input placeholder="Select Role" {...field} />
                      </FormControl>
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
                      <FormLabel>I Agree to Terms& Conditions</FormLabel>
                    </FormItem>
                  )}
                />
              </div>

              <div className={styles.formButtonGroup}>
                <Button
                  type="submit"
                  variant={"primary_outline"}
                  className={styles.buttonAction}
                >
                  Submit Form
                  <ArrowRight />
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
