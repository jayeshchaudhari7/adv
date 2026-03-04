import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarIcon, Clock} from "lucide-react";
import { useState } from "react";
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

const stats = [
  { value: "500+", label: "Campaigns Managed" },
  { value: "£12M+", label: "Ad Spend Managed" },
  { value: "3.8x", label: "Average ROAS" },
  { value: "200+", label: "Happy Clients" },
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

const HeroSection = () => {

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
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative py-12 md:py-20">
       <div className="mx-auto max-w-6xl flex gap-12">
         <div className="mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Digital Marketing Agency — UK & India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Scale Your Revenue
            <br />
            <span className="text-gradient-gold">Not Just Your Ad Spend</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We help eCommerce and D2C brands generate profitable growth through data-driven
            advertising across Google, Meta, TikTok, Amazon & more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-gold transition-all hover:opacity-90"
            >
              Get Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

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
       </div>


        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
