# MCU name
MCU = atmega32u4
CONVERT_TO = kb2040

# Bootloader selection?
#BOOTLOADER = atmel-dfu
#BOOTLOADER = rp2040
#BOOTLOADER = caterina

# Build Options
#   change yes to no to disable
# set in JSON:
#BOOTMAGIC_ENABLE = yes       # Enable Bootmagic Lite
#MOUSEKEY_ENABLE = yes       # Mouse keys
#EXTRAKEY_ENABLE = yes       # Audio control and System control
#CONSOLE_ENABLE = no         # Console for debug
#COMMAND_ENABLE = no         # Commands for debug and configuration
#NKRO_ENABLE = yes           # Enable N-Key Rollover
#RGBLIGHT_ENABLE = no        # Enable keyboard RGB underglow

BACKLIGHT_ENABLE = no        # Enable keyboard backlight functionality
RGB_MATRIX_ENABLE = yes
#RGB_MATRIX_DRIVER = ws2812
#WS2812_DRIVER_REQUIRED = yes
#WS2812_DRIVER = vendor
AUDIO_ENABLE = no           # Audio output
ENCODER_ENABLE = yes        # Use rotary encoder
ENCODER_MAP_ENABLE = yes
#LTO_ENABLE = yes            # Link-time optimization
CUSTOM_MATRIX = lite        # Lite custom matrix

# Project specific files
#SRC += matrix.c sn74x138.c
SRC += matrix.c #\
#       common/bitc_led.c #\
#       common/remote_kb.c

#QUANTUM_LIB_SRC += uart.c
# if using uart, use this:
#UART_DRIVER_REQUIRED = yes

DEFAULT_FOLDER = dieseltravis/travisergogen2024