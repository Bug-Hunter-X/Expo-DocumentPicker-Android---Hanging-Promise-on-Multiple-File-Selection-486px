# Expo DocumentPicker Android Hanging Promise

This repository demonstrates a bug in Expo's DocumentPicker API on Android where the promise returned by `DocumentPicker.getDocumentAsync()` fails to resolve when selecting multiple files.  The application hangs indefinitely. This issue is not addressed in the official Expo documentation.

## Bug Reproduction

1. Clone this repository.
2. Run the project on an Android emulator or device.
3. Attempt to select multiple files using the DocumentPicker.
4. Observe that the application hangs, and the promise never resolves.

## Solution (Workaround)

This is currently a workaround; a more robust solution may be needed.

1. Use the `DocumentPicker.getDocumentAsync()` within a timeout.  If the timeout is reached, handle the case gracefully (e.g., display an error message to the user).
2. Implement more sophisticated error handling that checks for specific conditions that might indicate a stalled promise. 
3. Consider using an alternative file picker library if the issue continues to occur and the timeout workaround proves insufficient.

This repository provides a simple example of the bug and a potential workaround.  Contributions and more effective solutions are welcome!