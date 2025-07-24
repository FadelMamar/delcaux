import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("toast.success.title"),
        description: t("toast.success.description"),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.description"),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 gradient-blue-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-navy-blue mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl font-worksans text-blue-grey max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-sm">
            <CardHeader className="p-0 pb-6">
              <CardTitle className="text-2xl font-montserrat font-semibold text-navy-blue">
                {t("contact.form.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.firstName")} *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t(
                                "contact.form.placeholder.firstName",
                              )}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.lastName")} *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t(
                                "contact.form.placeholder.lastName",
                              )}
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")} *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("contact.form.placeholder.email")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.company")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.placeholder.company")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.service")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t(
                                  "contact.form.placeholder.service",
                                )}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="business-automation">
                              {t("contact.form.services.automation")}
                            </SelectItem>
                            <SelectItem value="odoo-erp">
                              {t("contact.form.services.odoo")}
                            </SelectItem>
                            <SelectItem value="ai-solutions">
                              {t("contact.form.services.ai")}
                            </SelectItem>
                            <SelectItem value="ai-workshops">
                              {t("contact.form.services.training")}
                            </SelectItem>
                            <SelectItem value="consultation">
                              {t("contact.form.services.consultation")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")} *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder={t("contact.form.placeholder.message")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-navy-blue text-white py-4 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors text-lg"
                  >
                    {contactMutation.isPending
                      ? t("contact.form.sending")
                      : t("contact.form.submit")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-navy-blue mb-6">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-navy-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-blue">Email</div>
                    <div className="text-blue-grey">
                      fadel.seydou@delcaux.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-grey rounded-lg flex items-center justify-center flex-shrink-0">
                    <SiWhatsapp className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-blue">WhatsApp</div>
                    <div className="text-blue-grey">+227 90 36 65 36</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-warm-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-blue">Office</div>
                    <div className="text-blue-grey">
                      Niamey, Niger
                      <br />
                      West Africa
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/22790366536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <SiWhatsapp className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-navy-blue mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="gradient-navy-blue p-8 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Business Hours
              </h3>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-400">
                <p className="text-sm text-blue-100">
                  West Africa Time (GMT+1)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
