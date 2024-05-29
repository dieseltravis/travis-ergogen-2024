# MCU name
MCU = atmega32u4
CONVERT_TO = kb2040

BACKLIGHT_ENABLE = no       # Enable keyboard backlight functionality
RGB_MATRIX_ENABLE = yes
AUDIO_ENABLE = no           # Audio output
ENCODER_ENABLE = yes        # Use rotary encoder
ENCODER_MAP_ENABLE = yes
CUSTOM_MATRIX = lite        # Lite custom matrix

# Project specific files
SRC += matrix.c

DEFAULT_FOLDER = dieseltravis/travisergogen2024