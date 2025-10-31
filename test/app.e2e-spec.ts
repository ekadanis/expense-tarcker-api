import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('Expense Tracker API (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let jwtToken: string;
  let categoryId: number;
  let expenseId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    prisma = app.get(PrismaService);

    // reset database sebelum test
    await prisma.expense.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await app.close();
  });

  // ---------------- Auth ----------------
  it('/auth/register (POST)', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'test@example.com', password: '123456' })
      .expect(201);

    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('/auth/login (POST)', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@example.com', password: '123456' })
      .expect(201);

    expect(res.body).toHaveProperty('access_token');
    jwtToken = res.body.access_token;
  });

  // ---------------- Categories ----------------
  it('/categories (POST)', async () => {
    const res = await request(app.getHttpServer())
      .post('/categories')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({ name: 'Food' })
      .expect(201);

    expect(res.body).toHaveProperty('name', 'Food');
    categoryId = res.body.id;
  });

  it('/categories (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/categories')
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('name', 'Food');
  });

  it('/categories/:id (PATCH)', async () => {
    const res = await request(app.getHttpServer())
      .patch(`/categories/${categoryId}`)
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({ name: 'Drinks' })
      .expect(200);

    expect(res.body).toHaveProperty('name', 'Drinks');
  });

  it('/categories/:id (DELETE)', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/categories/${categoryId}`)
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);

    expect(res.body).toHaveProperty('deleted', true);
  });

  // ---------------- Expenses ----------------
  it('/expenses (POST)', async () => {
    // buat category dulu
    const category = await request(app.getHttpServer())
      .post('/categories')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({ name: 'Food' });

    const res = await request(app.getHttpServer())
      .post('/expenses')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({
        amount: 5000,
        categoryId: category.body.id,
        description: 'Lunch',
      })
      .expect(201);

    expect(res.body).toHaveProperty('amount', 5000);
    expenseId = res.body.id;
  });

  it('/expenses (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/expenses')
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('amount', 5000);
  });

  it('/expenses/:id (PATCH)', async () => {
    const res = await request(app.getHttpServer())
      .patch(`/expenses/${expenseId}`)
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({ amount: 7000 })
      .expect(200);

    expect(res.body).toHaveProperty('amount', 7000);
  });

  it('/expenses/:id (DELETE)', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/expenses/${expenseId}`)
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);

    expect(res.body).toHaveProperty('deleted', true);
  });
});
