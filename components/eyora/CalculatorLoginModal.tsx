"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface CalculatorLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: UserData) => void;
}

interface UserData {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  company: string;
}

const countryCodes = [
  { code: "+973", country: "Bahrain" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+965", country: "Kuwait" },
  { code: "+974", country: "Qatar" },
  { code: "+968", country: "Oman" },
  { code: "+20", country: "Egypt" },
  { code: "+48", country: "Poland" },
  { code: "+1", country: "US/Canada" },
  { code: "+44", country: "UK" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+65", country: "Singapore" },
  { code: "+61", country: "Australia" },
  { code: "+27", country: "South Africa" },
].sort((a, b) => a.country.localeCompare(b.country));

const freeEmailProviders = [
  "gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "aol.com", "icloud.com",
  "me.com", "live.com", "msn.com", "protonmail.com", "yandex.com", "zoho.com",
];

export default function CalculatorLoginModal({ isOpen, onClose, onSubmit }: CalculatorLoginModalProps) {
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    countryCode: "+973",
    phoneNumber: "",
    email: "",
    company: "",
  });
  const [errors, setErrors] = useState<Partial<UserData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): { isValid: boolean; error?: string } => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }
    const domain = email.split("@")[1].toLowerCase();
    if (freeEmailProviders.includes(domain)) {
      return { isValid: false, error: "Please use a company email address (not Gmail, Outlook, Yahoo, etc.)" };
    }
    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors: Partial<UserData> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailValidation = validateEmail(formData.email);
      if (!emailValidation.isValid) newErrors.email = emailValidation.error || "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(formData);
      setFormData({ firstName: "", lastName: "", countryCode: "+973", phoneNumber: "", email: "", company: "" });
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (!isOpen) return null;

  const fieldClass = (hasError?: string) =>
    `w-full px-3 py-2.5 border rounded-xl bg-white/80 focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all ${
      hasError ? "border-red-300" : "border-[var(--glass-border-hover)]"
    }`;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative eyora-card !bg-white/95 rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-[var(--bg-tertiary)] rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4 inline-flex">
            AI Storage Calculator
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Access Your Recommendation</h2>
          <p className="text-[var(--text-secondary)] text-sm">
            Tell us a bit about yourself to see your personalized Eyora NVR recommendation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">First Name *</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={fieldClass(errors.firstName)}
                placeholder="John"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Last Name *</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={fieldClass(errors.lastName)}
                placeholder="Doe"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Country Code *</label>
            <select
              value={formData.countryCode}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className={fieldClass()}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} - {country.country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Phone Number *</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className={fieldClass(errors.phoneNumber)}
              placeholder="1234567890"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Company Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={fieldClass(errors.email)}
              placeholder="john.doe@company.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Company Name *</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className={fieldClass(errors.company)}
              placeholder="Your Company Name"
            />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary btn-shine w-full rounded-full px-6 py-3.5 text-sm font-semibold disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Continue to Calculator"}
          </button>
        </form>
      </div>
    </div>
  );
}
