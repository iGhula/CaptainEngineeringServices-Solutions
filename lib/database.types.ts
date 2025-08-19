export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          phone: string
          company: string
          job_title: string
          country: string
          city: string
          interests: string[]
          notes?: string
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name: string
          phone: string
          company: string
          job_title: string
          country: string
          city: string
          interests: string[]
          notes?: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          phone?: string
          company?: string
          job_title?: string
          country?: string
          city?: string
          interests?: string[]
          notes?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
