import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const orderData = await req.json();

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Create order record
    const order = {
      orderId: orderData.paymentIntentId,
      date: new Date().toISOString(),
      customerEmail: orderData.customerInfo.email,
      customerName: `${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`,
      shippingAddress: orderData.customerInfo.address,
      city: orderData.customerInfo.city,
      state: orderData.customerInfo.state,
      zip: orderData.customerInfo.zip,
      country: orderData.customerInfo.country,
      totalAmount: orderData.amount / 100, // Convert cents to dollars
      items: JSON.stringify(orderData.items),
      status: 'pending',
    };

    // Convert to CSV format
    const csvLine = [
      order.orderId,
      order.date,
      order.customerEmail,
      order.customerName,
      order.shippingAddress,
      order.city,
      order.state,
      order.zip,
      order.country,
      order.totalAmount,
      order.items,
      order.status,
    ].join(',');

    const ordersFile = path.join(dataDir, 'orders.csv');

    // Check if file exists, if not create with headers
    if (!existsSync(ordersFile)) {
      const headers = 'Order ID,Date,Email,Name,Address,City,State,ZIP,Country,Total,Items,Status\n';
      await writeFile(ordersFile, headers + csvLine + '\n', 'utf8');
    } else {
      // Append to existing file
      const { appendFile } = await import('fs/promises');
      await appendFile(ordersFile, csvLine + '\n', 'utf8');
    }

    return NextResponse.json({ success: true, orderId: order.orderId });
  } catch (error: any) {
    console.error('Error saving order:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save order' },
      { status: 500 }
    );
  }
}
