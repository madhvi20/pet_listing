export const handleApiError = (error) => {
    if (error.response) {
      console.error('API error:', error.response.data);
      alert(`API Error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error('No response from API:', error.request);
      alert('No response from API. Please try again later.');
    } else {
      console.error('Error:', error.message);
      alert(`Error: ${error.message}`);
    }
  };
  