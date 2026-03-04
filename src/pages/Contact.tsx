import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { submitConsultationLeads } from "@/lib/submitConsultationLeads";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

const Contact = () => {
  const { toast } = useToast();

  const [bookingDate, setBookingDate] = useState<Date>();
  const [bookingTime, setBookingTime] = useState("");
  const [bookingTimezone, setBookingTimezone] = useState("IST");

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [form, setForm] = useState({
    budget: "",
    queryType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone } = bookingForm;
    const date = format(bookingDate, "yyyy-MM-dd");
    const time = bookingTime;
    const timezone = bookingTimezone;

    const formData = {
      name,
      email,
      phone,
      date,
      time,
      timezone
    };

    try {
      const data = await submitConsultationLeads(formData);
      toast({
        title: "Success",
        description: "Consultation booked successfully",
      });
      setBookingForm({ name: "", email: "", phone: "" });
      setBookingDate(undefined);
      setBookingTime("");
      setBookingTimezone("IST");
      setForm({ budget: "", queryType: "" });
    } 
    catch (error) {
      toast({
        title: "Error",
        description: "Failed to book consultation",
        variant: "destructive"
      });
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="container">

            {/* Heading */}
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Us
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl"
              >
                Let's Grow Together
              </motion.h1>
              <p className="text-muted-foreground">
                Get your free, no-obligation audit. We'll respond within 24 hours.
              </p>
            </div>

            {/* GRID */}
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">

              {/* FORM */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border bg-background p-8 shadow-lg md:p-10"
                >
                  <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mb-2 text-2xl font-extrabold text-foreground md:text-3xl">
                      Schedule a Free Consultation
                    </h2>
                    <p className="text-muted-foreground">
                      Pick a date and time that works best for you.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* DATE + TIMEZONE */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Preferred Date *
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !bookingDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {bookingDate
                                ? format(bookingDate, "PPP")
                                : "Select a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={bookingDate}
                              onSelect={setBookingDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="p-3"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Timezone
                        </label>
                        <select
                          value={bookingTimezone}
                          onChange={(e) =>
                            setBookingTimezone(e.target.value)
                          }
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                        >
                          <option value="IST">IST (India)</option>
                          <option value="GMT">GMT</option>
                          <option value="EST">EST</option>
                          <option value="PST">PST</option>
                        </select>
                      </div>
                    </div>

                    {/* TIME SLOTS */}
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock className="h-4 w-4" />
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingTime(slot)}
                            className={cn(
                              "rounded-lg border px-3 py-2 text-xs font-medium transition",
                              bookingTime === slot
                                ? "border-primary bg-primary text-white"
                                : "border-border hover:border-primary"
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CONTACT FIELDS */}
                    <div className="grid gap-5 sm:grid-cols-3">
                      <input
                        required
                        placeholder="Name"
                        value={bookingForm.name}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            name: e.target.value
                          })
                        }
                        className="w-full rounded-lg border border-input px-4 py-3 text-sm"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email"
                        value={bookingForm.email}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            email: e.target.value
                          })
                        }
                        className="w-full rounded-lg border border-input px-4 py-3 text-sm"
                      />
                      <input
                        placeholder="Phone"
                        value={bookingForm.phone}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            phone: e.target.value
                          })
                        }
                        className="w-full rounded-lg border border-input px-4 py-3 text-sm"
                      />
                      <select
                        value={form.budget}
                        onChange={(e) =>
                          setForm({ ...form, budget: e.target.value })
                        }
                        className="w-full rounded-lg border border-input px-4 py-3 text-sm"
                      >
                        <option value="">Budget</option>
                        <option>Under £5,000</option>
                        <option>£5,000 - £15,000</option>
                        <option>£15,000 - £50,000</option>
                      </select>
                      <select
                        value={form.queryType}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            queryType: e.target.value
                          })
                        }
                        className="w-full rounded-lg border border-input px-4 py-3 text-sm"
                      >
                        <option value="">Query Type</option>
                        <option>Google Ads</option>
                        <option>Meta Ads</option>
                        <option>SEO</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white"
                    >
                      <CalendarIcon className="mr-2 inline h-4 w-4" />
                      Book Consultation
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* CONTACT INFO */}
              <div className="space-y-8 lg:col-span-2">
                <div className="rounded-xl border border-border p-6">
                  <h3 className="mb-4 text-lg font-bold text-foreground">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">India</p>
                        <p className="text-sm text-muted-foreground">16, Sai Baba Society, Pandesara, Surat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">UK</p>
                        <p className="text-sm text-muted-foreground">United Kingdom</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <a href="tel:+919725487887" className="block text-sm text-muted-foreground hover:text-primary">🇮🇳 +91 97254 87887</a>
                        <a href="tel:+447442193744" className="block text-sm text-muted-foreground hover:text-primary">🇬🇧 +44 7442 193744</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-primary" />
                      <a href="mailto:hello@advertza.com" className="text-sm text-muted-foreground hover:text-primary">hello@advertza.com</a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-charcoal p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary-foreground">Free Audit Includes:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Campaign performance review</li>
                    <li>✓ Competitor analysis</li>
                    <li>✓ Growth opportunity report</li>
                    <li>✓ Custom strategy recommendations</li>
                    <li>✓ 30-minute consultation call</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;