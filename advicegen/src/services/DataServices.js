const fetchAdvice = async () => {
  let min = 1;
  let max = 223;
  let number = Math.floor(Math.random() * max) + min;
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${number}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed", error);
  }
};
export { fetchAdvice };
