"use client"
import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { Mail, Phone, MapPin, CircleCheck as CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  quantity: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  quantity: '',
  message: '',
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'guptaarti132@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8777 543 567' },
  { icon: MapPin, label: 'Studio', value: 'Kolkata, West Bengal, India' },
]

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Contact Us"
          title="Start Your Gifting Journey"
          subtitle="Tell us about your vision and we'll craft something extraordinary. No request is too large or too personal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-light text-[#1A1208] mb-4">
                Let&apos;s Create Together
              </h3>
              <p className="text-[#7A6E62] text-sm leading-relaxed">
                Our gifting consultants are ready to bring your vision to life.
                Whether you have a clear brief or just a feeling — we can help.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#C9A84C]/30 bg-white flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#7A6E62]">{label}</p>
                    <p className="text-[#1A1208] text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E5DED5]">
              <p className="text-xs tracking-widest uppercase text-[#7A6E62] mb-3">Response Time</p>
              <p className="text-[#1A1208] text-sm">Within 4 business hours</p>
              <p className="text-[#7A6E62] text-xs mt-1">
                Mon–Sat, 9am–7pm IST
              </p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 bg-white border border-[#E5DED5] p-8 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center gap-5"
              >
                <CheckCircle size={48} className="text-[#C9A84C]" strokeWidth={1} />
                <div>
                  <h3 className="font-serif text-2xl font-light text-[#1A1208] mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-[#7A6E62] text-sm">
                    Thank you for reaching out. Our team will be in touch within 4 business hours.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organisation</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="e.g. 50 packages, 200 hampers"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Needs *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your gifting occasion, preferences, budget range, and any special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={loading || !form.name || !form.email || !form.message}
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </Button>

                <p className="text-[#7A6E62] text-xs text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
