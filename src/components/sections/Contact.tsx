"use client"
import { motion } from 'motion/react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Mail, Phone, MapPin } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'guptaarti132@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8777 543 567' },
  { icon: MapPin, label: 'Studio', value: 'B-801 Emami City, Jessore Road, Dum Dum, Kolkata - 700028' },
]

export function Contact() {
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
            className="lg:col-span-3"
          >
            <div className="relative group">
              {/* Decorative background element for "color" and premium feel */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96B] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-full h-[500px] bg-white border border-[#C9A84C]/20 overflow-hidden rounded-2xl shadow-2xl">
                <iframe 
                  src="https://maps.google.com/maps?q=Emami%20City,%20Jessore%20Road,%20Dum%20Dum,%20Kolkata%20700028&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
