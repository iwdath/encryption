# Encryption/Decryption Web Application

This web application provides a simple interface for encrypting and decrypting text using a custom encryption algorithm. The algorithm substitutes each character in the input text with a corresponding hexadecimal string, according to a predefined dictionary.

## Usage:
1. **`Enter Text`**: Input the text you want to encrypt or decrypt into the provided text area.
2. **`Choose Mode`**: Select either **'Encrypt'** or **'Decrypt'** from the dropdown menu.
3. **`Submit`**: Click the **'Submit'** button to perform the chosen operation.
4. **`View Result`**: The result will be displayed below, either the encrypted or decrypted text.

## How it works:
- **`Encryption`**: Each character in the input text is replaced with a hexadecimal string according to the predefined dictionary. *Spaces and special characters are also encrypted.*
- **`Decryption`**: The encrypted text is processed in chunks of eight characters, each chunk representing a character in the original text. The chunks are matched against the dictionary to decrypt the text.

## Supported Languages:
- **`English`**
- **`Russian`**
- *You can contribute by adding support for additional languages through pull requests or forks. ⚠️ Please note that for proper encryption, hexadecimal strings in the dictionary must <u>not repeat</u>.*

## Supported Characters:
The program supports encryption and decryption for the following characters:
- Alphabetic characters (both lowercase and uppercase)
- Digits (0-9)
- Basic punctuation marks and special characters

## Technologies Used:
- **`HTML`**: Provides the structure and content of the web page.
- **`CSS`**: Styles the elements for a better user experience.
- **`JavaScript`**: Implements the encryption and decryption algorithms and handles user interactions.
- **`OverlayScrollbars`**: Enhances the scrollbars for a smoother scrolling experience.