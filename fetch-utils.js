const SUPABASE_URL = 'https://xdcvjntlqrqcuecozayl.supabase.co';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTY1NywiZXhwIjoxOTU1MDg1NjU3fQ.kYwSaCT_1XxRPzpdP5wX23hxS9Dlgnro4zrFOvZ1iic';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getPet() {
    const response = await client
        .from('pets')
        .select();

    console.log(response.data);
    return response.data;
}