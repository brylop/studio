
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mockSchools } from '@/lib/mock-data';
import type { School } from '@/types';

interface Params {
  id: string;
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params;
  const school = mockSchools.find(s => s.id === id);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  if (school) {
    return NextResponse.json(school);
  } else {
    return NextResponse.json({ message: 'School not found' }, { status: 404 });
  }
}
