import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async (request, { params }) => {
  try {
    const paramsAwaited = await params;
    if (!paramsAwaited) {
      return new Response('Invalid request', { status: 400 });
    }

    await connectDB();
    const property = await Property.findById(paramsAwaited.id);

    if (!property) {
      return new Response('Property not found', { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching property:', error);
    return new Response('Something went wrong', { status: 500 });
  }
};
