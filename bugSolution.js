```javascript
import * as DocumentPicker from 'expo-document-picker';

async function pickMultipleDocuments() {
  try {
    const result = await Promise.race([
      DocumentPicker.getDocumentAsync({ multiple: true }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000)), // 10-second timeout
    ]);
    if (result.cancelled) {
      console.log('Cancelled');
    } else {
      console.log('Selected files:', result.uris);
    }
  } catch (error) {
    console.error('Error picking documents:', error);
    // Handle the error appropriately (e.g., show an error message to the user)
  }
}
```