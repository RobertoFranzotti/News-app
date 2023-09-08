const apiKey = 'Sd449111839a44648aa855f026e26eba0'; 
const apiUrl = 'https://newsapi.org/v2/top-headlines';

export async function fetchNews() {
  try {
    const response = await fetch(`${apiUrl}?country=br&apiKey=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}