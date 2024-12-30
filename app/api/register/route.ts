import { NextRequest, NextResponse } from 'next/server'
import { saveUser, getUserByEmail } from '@/lib/blob'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userId = await saveUser({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({ message: 'User created successfully', userId }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ message: 'An error occurred during registration' }, { status: 500 })
  }
}

