type Handler = {
    req: { method: string; body: { username: any; password: any; expiresInMins: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }
}
// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { username, password, expiresInMins } = await request.json();

    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
      expiresInMins: expiresInMins || 30,
    });
    console.log(response.data)
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}

// export async function GET(request: NextRequest) {
//     try{
//         const response = await axios.get('https://dummyjson.com/auth/me');
//         return NextResponse.json(response.data);
//     }catch(error){
//         console.log(error);
//     }
// }
