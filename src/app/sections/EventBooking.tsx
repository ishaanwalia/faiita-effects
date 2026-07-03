"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { mockEvents } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, X, Check } from "lucide-react";

const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function EventBooking() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const days = daysInMonth(currentMonth, currentYear);
  const firstDay = firstDayOfMonth(currentMonth, currentYear);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setShowBooking(true);
    setBookingConfirmed(false);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setShowBooking(false);
      setBookingConfirmed(false);
      setSelectedDate(null);
    }, 2000);
  };

  // Check if a date has an event
  const getEventForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return mockEvents.find((e) => e.date === dateStr);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
              Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Event Booking
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse upcoming events and register your participation
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <h3 className="text-lg font-bold text-[#0A2540]">
                    {months[currentMonth]} {currentYear}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-semibold text-gray-400 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}

                  {/* Day cells */}
                  {Array.from({ length: days }).map((_, i) => {
                    const day = i + 1;
                    const event = getEventForDate(day);
                    const isSelected = selectedDate === day;

                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm transition-all relative ${
                          isSelected
                            ? "bg-[#FF9933] text-white"
                            : event
                            ? "bg-[#FF9933]/10 text-[#0A2540] hover:bg-[#FF9933]/20"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <span className="font-medium">{day}</span>
                        {event && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Event Details / Booking Panel */}
          <div className="lg:col-span-1">
            {showBooking ? (
              <ScrollReveal>
                <GlassCard className="p-6">
                  {bookingConfirmed ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                        <Check className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Registration Confirmed!
                      </h3>
                      <p className="text-white/60 text-sm">
                        You're registered for the event on{" "}
                        {selectedDate} {months[currentMonth]} {currentYear}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">
                          {selectedDate} {months[currentMonth]} {currentYear}
                        </h3>
                        <button
                          onClick={() => {
                            setShowBooking(false);
                            setSelectedDate(null);
                          }}
                          className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-white/60" />
                        </button>
                      </div>

                      {getEventForDate(selectedDate!) ? (
                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-xl p-4">
                            <h4 className="text-white font-semibold mb-2">
                              {getEventForDate(selectedDate!)?.title}
                            </h4>
                            <div className="flex items-center gap-2 text-white/60 text-sm mb-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {getEventForDate(selectedDate!)?.location}
                            </div>
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                              <Users className="w-3.5 h-3.5" />
                              {getEventForDate(selectedDate!)?.registered} registered
                            </div>
                          </div>

                          <button
                            onClick={handleConfirmBooking}
                            className="w-full py-3 bg-[#FF9933] text-white rounded-xl font-semibold hover:bg-[#e68a2e] transition-all"
                          >
                            Register for Event
                          </button>
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <Calendar className="w-12 h-12 text-white/20 mx-auto mb-3" />
                          <p className="text-white/60 text-sm">
                            No events scheduled for this date
                          </p>
                          <p className="text-white/40 text-xs mt-1">
                            Select another date to browse events
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </GlassCard>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0A2540] mb-4">
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {mockEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-4 bg-gray-50 rounded-xl hover:bg-[#FF9933]/5 transition-colors cursor-pointer"
                      >
                        <h4 className="font-semibold text-[#0A2540] text-sm mb-2">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <Users className="w-3 h-3" />
                          {event.registered} registered
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Click a date on the calendar to register
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}