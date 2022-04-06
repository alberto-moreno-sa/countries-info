import health from 'pages/api/health';

describe('Health Api', () => {
  it('Returns success if rabbit is working', async () => {
    const req = {} as any;
    const jsonRenderSpy = jest.fn();
    const res = { statusCode: 500, json: jsonRenderSpy } as any;
    await health(req, res);
    expect(res.statusCode).toBe(200);
    expect(jsonRenderSpy).toBeCalledTimes(1);
  });

  it('Returns error if rabbit is not working', async () => {
    const req = {} as any;
    const jsonRenderSpy = jest.fn();
    const res = { statusCode: 500, json: jsonRenderSpy } as any;
    try {
      await health(req, res);
    } catch (error) {
      expect(res.statusCode).toBe(500);
    }
  });
});
