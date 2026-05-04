import Shield from "@/assets/shield.svg?react";
import Verify from "@/assets/verify.svg?react";
import Housing from "@/assets/housing.svg?react";
import Landlord from "@/assets/landlord.svg?react";
import Tenants from "@/assets/tenants.svg?react";

export const PAGE_CONTENT = {
  heading: "San Luis Obispo Rental Registry",
  body: "A trusted registry that helps prevent rental scams, verifies legitimate landlords, and provides valuable housing data to the community.",
  secondHeading: "How it Works"
};

export const FEATURE_CARDS = [
  {
    id: "scam",
    title: "Prevent Scams",
    desc:
      "Verify landlords are legitimate before signing a lease. " +
      "Check registration status and protect yourself from bad actors.",
    icon: Shield
  },
  {
    id: "verify",
    title: "Verify Landlords",
    desc:
      "Tenants can easily check if their potential landlord is " +
      "registered with the city and their record.",
    icon: Verify
  },
  {
    id: "housing",
    title: "Tracking Housing Data",
    desc:
      "Help the city understand rental trends, property distribution," +
      " and housing needs across San Luis Obispo.",
    icon: Housing
  }
];

export const USER_TYPES = [
  {
    id: "landlord",
    title: "For Landlords",
    icon: Landlord,
    color: "blue",
    steps: [
      "Register your rental properties with the city",
      "Provide property details and contact information",
      "Receive verification and build trust with tenants"
    ]
  },
  {
    id: "tenant",
    title: "For Tenants",
    icon: Tenants,
    color: "green",
    steps: [
      "Search for your landlord or property address",
      "Verify registration status before signing a lease",
      "Report any issues or suspicious activity"
    ]
  }
];
