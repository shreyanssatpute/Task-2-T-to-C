<script>
    function convertToCelsius() {
      const fahrenheitInput = document.getElementById("fahrenheit");
      const celsiusInput = document.getElementById("celsius");
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      celsiusInput.value = celsiusValue.toFixed(2);
      document.getElementById("resultText").textContent = `${fahrenheitValue.toFixed(2)}°F is equal to ${celsiusValue.toFixed(2)}°C.`;
    }

    function convertToFahrenheit() {
      const celsiusInput = document.getElementById("celsius");
      const fahrenheitInput = document.getElementById("fahrenheit");
      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
      document.getElementById("resultText").textContent = `${celsiusValue.toFixed(2)}°C is equal to ${fahrenheitValue.toFixed(2)}°F.`;
    }
  </script>