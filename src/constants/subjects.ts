import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "AAPI103",
        name: "Introduction To Pacific Islander Studies",
        department: "Asian American and Pacific Islander Studies",
        description: "History, culture, and experiences of Pacific Islanders in the United States.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "ACCT120",
        name: "Federal Income Tax",
        department: "Accounting",
        description: "Introduction to federal income tax concepts and principles.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "BUSE100",
        name: "Introduction to Business",
        department: "Business",
        description: "Fundamental concepts and principles of business, including management, marketing, finance, and entrepreneurship.",
        createdAt: new Date().toISOString(),
    },
]