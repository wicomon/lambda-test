import { addMovie } from "../addMovie";

describe('addMovie', () => {
  it('should add a new movie', async () => {
    const event = {
      body: JSON.stringify({ title: 'Example Movie', year: '2022' }),
    };

    const result = await addMovie(event);

    // Verify the result
    expect(result.status).toBe(200);
    expect(result.body).toBeDefined();

    const responseBody = (result.body);
    expect(responseBody.message).toBe('Movie added successfully');
  });
});
