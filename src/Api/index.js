const apiKey = '22b665b57806473b9ebe602e576b4453'; 
const apiUrl = 'https://newsapi.org/v2/top-headlines';

export async function fetchNews() {
  
  try {
    const response = await fetch(`${apiUrl}?country=us&apiKey=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}