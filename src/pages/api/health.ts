// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://nextjs.org/docs/basic-features/typescript
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  success: boolean;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  try {
    res.statusCode = 200;
    res.json({ success: true });
  } catch (error) {
    res.statusCode = 500;
    res.json({ success: false });
  }
};
