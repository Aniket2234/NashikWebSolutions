import { type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.contactInquiries = new Map();
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

export const storage = new MemStorage();
