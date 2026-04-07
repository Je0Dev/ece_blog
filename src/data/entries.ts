export const JOURNAL_ENTRIES = [
  {
    id: "personal-website",
    date: "2026-04-06",
    title: "Project: Personal Portfolio Website",
    type: "project",
    status: "published",
    excerpt: "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a brutalist design with theme switching and seasonal variations.",
    content: `# Project: Personal Portfolio Website

A modern, responsive portfolio website built with <a class="inline-link link-green" href="https://react.dev" target="_blank">React</a> and <a class="inline-link link-blue" href="https://typescriptlang.org" target="_blank">TypeScript</a>. This project showcases my journey as an ECE student and my work in software development.

## Overview

This portfolio was created to serve as a digital garden - a space where I can share my projects, learning notes, and ideas. Unlike a traditional blog, a digital garden emphasizes growth and continuous improvement of content.

## Tech Stack

- <a class="inline-link link-green" href="https://react.dev" target="_blank">React 19</a> with TypeScript
- <a class="inline-link link-blue" href="https://tailwindcss.com" target="_blank">Tailwind CSS 4</a>
- <a class="inline-link link-cyan" href="https://vitejs.dev" target="_blank">Vite</a>
- <a class="inline-link link-pink" href="https://motion.dev" target="_blank">Framer Motion</a>

## Key Features

### Theme System
The website features a sophisticated theme system that allows users to switch between dark and light modes. The themes are implemented using CSS custom properties (CSS variables), making it easy to maintain and extend.

### Brutalist Design
The design follows a brutalist aesthetic with:
- Bold typography using Inter and Source Serif fonts
- High contrast color schemes
- Minimal decorative elements
- Intentionally raw, unpolished look

### Responsive Layout
Built with mobile-first approach using Tailwind CSS, ensuring the site looks great on all device sizes.

### Smooth Animations
Framer Motion provides smooth page transitions and micro-interactions throughout the site.

## Implementation Details

### Component Architecture

\`\`\`typescript
// Example component structure
interface JournalEntry {
  id: string;
  title: string;
  content: string;
  tech: string[];
  category: string;
}
\`\`\`

### State Management
React's built-in state management is used throughout, with useState and useEffect hooks for managing theme state and user interactions.

### Routing
React Router handles client-side routing, enabling fast page transitions without full page reloads.

## Challenges & Solutions

### Challenge: Performance
**Solution:** Implemented code splitting with React.lazy() to reduce initial bundle size. Also added lazy loading for images.

### Challenge: Accessibility
**Solution:** Added skip links, ARIA labels, and proper semantic HTML. The site is keyboard navigable and screen reader friendly.

### Challenge: SEO
**Solution:** Added proper meta tags, Open Graph tags, RSS feed, robots.txt, and sitemap.xml.

## Key Learnings

1. **CSS Custom Properties** - Learned how to effectively use CSS variables for theming
2. **React Performance** - Understanding of code splitting and lazy loading
3. **Accessibility** - Importance of semantic HTML and ARIA labels
4. **Design Systems** - How to create consistent design with Tailwind

## Future Improvements

- Add comments section for each post
- Implement full-text search
- Add user authentication for private notes
- Create a newsletter subscription system
- Add more interactive elements

## Links

- <a class="inline-link link-cyan" href="https://je0dev.github.io/personal_website/" target="_blank">Live Demo</a>
- <a class="inline-link link-green" href="https://github.com/Je0Dev/personal_website" target="_blank">GitHub</a>
    `,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web Development",
    readingTime: 15,
    image: "https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg",
    skills: [
      { title: "React", description: "Building interactive UI" },
      { title: "TypeScript", description: "Type-safe development" },
      { title: "Tailwind CSS", description: "Utility-first styling" }
    ]
  },
  {
    id: "cli-task-manager",
    date: "2026-03-16",
    title: "Project: CLI Task Manager",
    type: "project",
    status: "published",
    excerpt: "A command-line task management system written in C with file-based persistence.",
    content: `# Project: CLI Task Manager

A lightweight CLI application for managing tasks, built in <a class="inline-link link-blue" href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>. This project helped me understand data structures, file I/O, and memory management.

## Overview

The Task Manager is a command-line application that allows users to create, read, update, and delete tasks. It demonstrates fundamental C programming concepts while providing a useful utility.

## Why This Project?

As an ECE student, I wanted to build something practical that would help me understand low-level programming concepts. A task manager seemed like the perfect candidate - simple enough to complete in a reasonable time, but complex enough to teach important concepts like:

- Dynamic memory allocation
- File I/O operations  
- Data structure design
- User input validation
- Error handling

## Features

- **CRUD Operations** - Full create, read, update, and delete functionality
- **Priority Levels** - Tasks can be marked as High, Medium, or Low priority
- **Category Organization** - Tasks can be categorized for better organization
- **File Persistence** - All tasks are saved to a local JSON file
- **Search & Filter** - Find tasks by title, category, or priority
- **Color-coded Output** - Terminal colors for better UX
- **Command History** - Navigate through previous commands

## Technical Implementation

### Data Structures

The core of the application uses a dynamic array implementation:

\`\`\`c
typedef struct {
    int id;
    char title[100];
    char description[255];
    int priority; // 1=High, 2=Medium, 3=Low
    char category[50];
    char dueDate[20];
    int completed;
    time_t createdAt;
    time_t updatedAt;
} Task;

typedef struct {
    Task* tasks;
    int count;
    int capacity;
} TaskList;
\`\`\`

### File Operations

The application uses JSON format for persistence, which I chose for human-readability and ease of debugging:

\`\`\`c
void saveTasks(TaskList* list, const char* filename) {
    FILE* file = fopen(filename, "w");
    if (file == NULL) {
        printf("Error opening file!\\n");
        return;
    }
    
    fprintf(file, "{\\n");
    fprintf(file, "  \\"tasks\\": [\\n");
    
    for (int i = 0; i < list->count; i++) {
        Task* task = &list->tasks[i];
        fprintf(file, "    {\\n");
        fprintf(file, "      \\"id\\": %d,\\n", task->id);
        fprintf(file, "      \\"title\\": \\"%s\\",\\n", task->title);
        fprintf(file, "      \\"completed\\": %s\\n", 
                task->completed ? "true" : "false");
        fprintf(file, "    }");
        if (i < list->count - 1) fprintf(file, ",");
        fprintf(file, "\\n");
    }
    
    fprintf(file, "  ]\\n");
    fprintf(file, "}\\n");
    fclose(file);
}
\`\`\`

### Memory Management Strategy

One of the biggest challenges was proper memory management. I implemented a capacity doubling strategy:

\`\`\`c
void addTask(TaskList* list, Task task) {
    if (list->count >= list->capacity) {
        list->capacity *= 2;
        list->tasks = realloc(list->tasks, 
            list->capacity * sizeof(Task));
        if (list->tasks == NULL) {
            fprintf(stderr, "Memory allocation failed!\\n");
            exit(1);
        }
    }
    list->tasks[list->count++] = task;
}
\`\`\`

## Challenges & Solutions

### Challenge: Memory Management
**Problem:** Managing dynamic memory without leaks or segmentation faults.

**Solution:** I implemented a robust memory management strategy with:
- Capacity doubling to minimize reallocations
- Proper NULL checks after every malloc/realloc
- A cleanup function that frees all allocated memory
- Using Valgrind during development to detect leaks

### Challenge: Data Validation
**Problem:** User input could contain special characters or be too long, causing buffer overflows.

**Solution:** Created validation functions:

\`\`\`c
int validateTitle(const char* title) {
    if (title == NULL || strlen(title) == 0) {
        return 0; // Invalid
    }
    if (strlen(title) > 99) {
        printf("Title too long! Max 99 characters.\\n");
        return 0;
    }
    return 1; // Valid
}
\`\`\`

### Challenge: Cross-platform Compatibility
**Problem:** Terminal color codes work differently on Windows vs Linux/Mac.

**Solution:** Used conditional compilation:

\`\`\`c
#ifdef _WIN32
    #define CLEAR "cls"
#else
    #define CLEAR "clear"
#endif
\`\`\`

## Testing

I implemented comprehensive testing including:

1. **Unit Tests** - Test each function independently
2. **Integration Tests** - Test the full workflow
3. **Edge Case Tests** - Empty lists, maximum capacity, invalid input

\`\`\`bash
# Running tests
make test

# Output example
Test: Add single task... PASSED
Test: Add multiple tasks... PASSED
Test: Delete task... PASSED
Test: Memory cleanup... PASSED

All 15 tests passed!
\`\`\`

## Results

- **Lines of Code:** ~800
- **Build Time:** Instant with Make
- **Memory Usage:** ~50KB for 1000 tasks
- **Performance:** Instant operations on 1000+ tasks

## Future Improvements

Possible enhancements for v2.0:
- SQLite database backend
- Recurring tasks
- Due date reminders
- Export to CSV/JSON
- Multi-user support

## Lessons Learned

This project taught me:
1. The importance of proper memory management in C
2. How to design data structures for efficiency
3. The value of comprehensive error handling
4. How to write maintainable, documented code
5. The importance of testing at every level

## Source Code

Check out the full project on <a class="inline-link link-green" href="https://github.com/Je0Dev/cli-task-manager" target="_blank">GitHub</a>!

### Challenge: File Concurrency
**Solution:** Implemented file locking mechanism to prevent data corruption when multiple instances access the file.

## Key Learnings

1. **Dynamic Memory Allocation** - Understanding malloc, realloc, and free
2. **Data Structures** - Linked lists, arrays, and dynamic structures
3. **File I/O** - Reading and writing files in C
4. **Error Handling** - Proper error handling and edge cases
5. **Code Organization** - Modular programming with header files

## Future Enhancements

- Add recurring tasks
- Implement task dependencies
- Add due date reminders
- Create GUI version
- Add export to CSV/JSON

## Links

- <a class="inline-link link-green" href="https://github.com/Je0Dev/cli_task_manager_system" target="_blank">GitHub</a>
    `,
    tech: ["C", "CLI", "Data Structures", "File I/O"],
    category: "Software",
    readingTime: 20,
    image: "https://www.oldbookillustrations.com/site/assets/files/14449/boyed-floating-tackle.jpg",
    skills: [
      { title: "C Programming", description: "Systems programming basics" },
      { title: "Data Structures", description: "Arrays, linked lists" },
      { title: "File I/O", description: "Reading and writing files" }
    ]
  },
  {
    id: "cli-atm-system",
    date: "2026-03-16",
    title: "Project: CLI ATM System",
    type: "project",
    status: "published",
    excerpt: "A command-line ATM simulation demonstrating banking operations in C.",
    content: `# Project: CLI ATM System

A command-line ATM simulation demonstrating banking operations in <a class="inline-link link-blue" href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>. This project simulates basic banking transactions with PIN authentication and transaction history.

## Why This Project?

After completing my CLI Task Manager, I wanted to build something that dealt with more complex data structures and required robust security considerations. An ATM simulation was perfect because it combines:

- **Data persistence** - Save account data between sessions
- **Security** - PIN authentication and account locking
- **Complex operations** - Multiple transaction types with validation
- **Audit trails** - Complete transaction history

## Overview

This ATM system simulates real-world banking operations including:
- PIN verification with attempt limiting
- Balance inquiry
- Cash withdrawal (with denomination handling)
- Deposit money
- Mini statement (recent transactions)
- PIN change
- Account creation

## Architecture

### Account Structure

The core data structure models a real bank account:

\`\`\`c
typedef struct {
    int accountNumber;
    char holderName[100];
    char pin[5]; // 4-digit PIN stored as string
    double balance;
    Transaction* transactions;
    int transactionCount;
    int maxTransactions;
    time_t createdAt;
    int failedAttempts;
    int isLocked;
} Account;
\`\`\`

### Transaction History

Every operation creates an audit trail:

\`\`\`c
typedef struct {
    char timestamp[30];
    char type[20]; // DEPOSIT, WITHDRAWAL, TRANSFER, PIN_CHANGE
    double amount;
    double balanceAfter;
    char description[100];
} Transaction;
\`\`\`

## Security Implementation

This was the most critical aspect of the project. I implemented multiple layers of security:

### PIN Authentication with Lockout

\`\`\`c
int verifyPIN(Account* acc, const char* inputPIN) {
    // Check if account is locked
    if (acc->isLocked) {
        printf("Account is locked. Contact bank.\\n");
        return -1;
    }
    
    int attempts = 0;
    while (attempts < 3) {
        if (strcmp(acc->pin, inputPIN) == 0) {
            acc->failedAttempts = 0; // Reset on success
            return 1; // Success
        }
        attempts++;
        acc->failedAttempts++;
        
        printf("Incorrect PIN. %d attempts remaining.\\n", 
               3 - acc->failedAttempts);
        
        if (acc->failedAttempts >= 3) {
            acc->isLocked = 1;
            printf("Account locked due to too many failed attempts.\\n");
            saveAccounts(); // Persist lock state
            return -1;
        }
    }
    return 0;
}
\`\`\`

### Input Masking

For PIN entry, I implemented secure input that doesn't echo characters:

\`\`\`c
void getSecurePIN(char* buffer, int size) {
    int pos = 0;
    char c;
    
    while ((c = getch()) != '\\r' && pos < size - 1) {
        if (c == '\\b' && pos > 0) {
            pos--;
            printf("\\b \\b"); // Backspace visually
        } else if (c >= '0' && c <= '9') {
            buffer[pos++] = c;
            printf("*"); // Mask input
        }
    }
    buffer[pos] = '\\0';
    printf("\\n");
}
\`\`\`

## Transaction Processing

### Cash Withdrawal with Denominations

The system calculates optimal bill distribution:

\`\`\`c
int withdraw(double amount, int* bills) {
    // bills[0] = $50, bills[1] = $20, bills[2] = $10, bills[3] = $5
    int denominations[] = {50, 20, 10, 5};
    
    if (amount < 5 || amount > 1000) {
        printf("Invalid withdrawal amount. $5-$1000 allowed.\\n");
        return 0;
    }
    
    int remaining = (int)amount;
    for (int i = 0; i < 4; i++) {
        bills[i] = remaining / denominations[i];
        remaining %= denominations[i];
    }
    
    return 1; // Success
}
\`\`\`

## Data Persistence

Accounts are stored in a binary file with simple encryption:

\`\`\`c
void saveAccounts(Account* accounts, int count) {
    FILE* fp = fopen("accounts.dat", "wb");
    if (!fp) return;
    
    // Simple XOR encryption for security
    for (int i = 0; i < count; i++) {
        Account enc = accounts[i];
        // Encrypt PIN (simple XOR with key)
        for (int j = 0; j < 5; j++) {
            enc.pin[j] ^= 0x5A;
        }
        fwrite(&enc, sizeof(Account), 1, fp);
    }
    fclose(fp);
}
\`\`\`

## Challenges Overcome

### Challenge: Concurrent Access
**Problem:** What if two users try to access the same account?

**Solution:** Implemented file locking using flock() on Linux or equivalent on Windows.

### Challenge: Data Integrity
**Problem:** What if the program crashes mid-transaction?

**Solution:** Write transactions to a temporary file first, then atomically rename on success.

## Testing

I created comprehensive test cases:

\`\`\`bash
# Test PIN verification
$ ./atm_test --pin-tests
Testing valid PIN... PASSED
Testing wrong PIN... PASSED
Testing account lockout... PASSED
Testing PIN change... PASSED

# Test transactions
$ ./atm_test --transaction-tests
Testing deposit... PASSED
Testing withdrawal... PASSED
Testing insufficient funds... PASSED
Testing transaction history... PASSED
\`\`\`

## Results

- **Accounts Supported:** Multiple accounts per file
- **Transaction History:** Last 50 transactions per account
- **Security:** 3-attempt lockout, encrypted PIN storage
- **Performance:** Instant operations

## What I Learned

1. **Security-first design** - Always think about how things can be exploited
2. **Data validation** - Never trust user input
3. **Atomic operations** - Ensure data consistency
4. **Testing edge cases** - Especially around security

## Source Code

Available on <a class="inline-link link-green" href="https://github.com/Je0Dev/cli-atm-system" target="_blank">GitHub</a>
        }
        attempts++;
        printf("Incorrect PIN. Attempts remaining: %d\\n", 3 - attempts);
    }
    printf("Account locked for security.\\n");
    return 0; // Failed
}
\`\`\`

## Transaction Processing

### Withdrawal

\`\`\`c
int withdraw(Account* acc, double amount) {
    if (amount > acc->balance) {
        printf("Insufficient funds!\\n");
        return 0;
    }
    if (amount > 1000) {
        printf("Withdrawal limit exceeded (max $1000)\\n");
        return 0;
    }
    acc->balance -= amount;
    addTransaction(acc, "WITHDRAWAL", amount);
    return 1;
}
\`\`\`

## Key Learnings

1. **Structure Handling** - Using structs for related data
2. **Array Operations** - Managing transaction history
3. **Input Validation** - Ensuring valid user input
4. **Security Basics** - Simple authentication

## Links

- <a class="inline-link link-cyan" href="https://github.com/Je0Dev/cli_atm_system" target="_blank">GitHub</a>
    `,
    tech: ["C", "CLI", "Banking", "Security"],
    category: "Software",
    readingTime: 15,
    image: "https://www.oldbookillustrations.com/site/assets/files/14448/silent-melancholy.jpg",
    skills: [
      { title: "C Programming", description: "Systems programming" },
      { title: "Data Structures", description: "Struct and arrays" },
      { title: "Security", description: "Basic authentication" }
    ]
  },
  {
    id: "esp32-timer-sensor",
    date: "2025-10-23",
    title: "Project: ESP32 Offboard Timer Sensor",
    type: "project",
    status: "published",
    excerpt: "An ESP32-based precision timer sensor system for embedded applications.",
    content: `# Project: ESP32 Offboard Timer Sensor

A precision timer system built with <a class="inline-link link-green" href="https://www.espressif.com/en/products/soc/esp32" target="_blank">ESP32</a> for embedded applications. This project demonstrates interrupt-based timing and sensor integration.

## Overview

The ESP32 Timer Sensor is designed for precision timing in embedded systems. It can:
- Measure time intervals with microsecond precision
- Trigger actions at specified intervals
- Interface with various sensors
- Send data via WiFi/Bluetooth

## Hardware

### Components
- ESP32 WROOM-32 module
- OLED display (SSD1306)
- Push buttons for control
- LED indicators
- External sensor inputs

### Circuit Diagram
The system uses the ESP32's built-in timer peripherals along with GPIO for external connections.

## Software Architecture

### Timer Configuration

\`\`\`c
// Configure hardware timer
void setupTimer() {
    timer_config_t config = {
        .alarm_en = TIMER_ALARM_EN,
        .counter_en = TIMER_COUNTER_EN,
        .intr_type = TIMER_INTR_LEVEL,
        .counter_dir = TIMER_COUNT_UP,
        .auto_reload = TIMER_AUTORELOAD_EN,
        .divider = 80  // 80 MHz / 80 = 1 MHz
    };
    
    timer_init(TIMER_GROUP_0, TIMER_0, &config);
    timer_set_alarm_value(TIMER_GROUP_0, TIMER_0, 1000000); // 1 second
}
\`\`\`

## Communication

### WiFi Data Transmission

\`\`\`c
void sendData(float sensorValue) {
    HTTPClient http;
    http.begin(serverEndpoint);
    http.addHeader("Content-Type", "application/json");
    
    char jsonBuffer[128];
    sprintf(jsonBuffer, "{\\"sensor\\": %.2f, \\"timestamp\\": %lu}", 
            sensorValue, millis());
    
    int httpCode = http.POST(jsonBuffer);
    http.end();
}
\`\`\`

## Challenges & Solutions

### Challenge: Timer Precision
**Solution:** Used hardware timer with divider for microsecond precision.

### Challenge: WiFi Stability
**Solution:** Implemented reconnection logic and buffering for offline data.

## Links

- <a class="inline-link link-orange" href="https://github.com/Je0Dev/esp32OffboardTimerSensor" target="_blank">GitHub</a>
    `,
    tech: ["ESP32", "C++", "Embedded Systems", "IoT"],
    category: "Embedded Systems",
    readingTime: 18,
    image: "https://www.oldbookillustrations.com/site/assets/files/14432/hanging-one-hand.jpg",
    skills: [
      { title: "ESP32", description: "WiFi-enabled microcontroller" },
      { title: "Embedded C++", description: "Hardware programming" },
      { title: "IoT", description: "Internet of Things" }
    ]
  },
  {
    id: "echoes-game",
    date: "2026-03-17",
    title: "Project: Echoes of the Fallen Kingdom",
    type: "project",
    status: "published",
    excerpt: "A text-based adventure game written in Python with turn-based combat.",
    content: `# Project: Echoes of the Fallen Kingdom

A text-based RPG adventure in <a class="inline-link link-blue" href="https://www.python.org" target="_blank">Python</a>. Players explore a dark fantasy world, battle monsters, and collect artifacts.

## Game Overview

**Echoes of the Fallen Kingdom** is a narrative-driven RPG where players:
- Explore procedurally generated dungeons
- Battle monsters with turn-based combat
- Collect powerful artifacts
- Make choices that affect the story

## Core Mechanics

### Character System

\`\`\`python
class Character:
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.max_health = health
        self.health = health
        self.attack = attack
        self.defense = defense
        self.inventory = []
        self.abilities = []
    
    def take_damage(self, damage):
        actual_damage = max(1, damage - self.defense)
        self.health -= actual_damage
        return actual_damage
\`\`\`

### Combat System

\`\`\`python
def combat_round(player, enemy):
    print(f"\\n=== Combat with {enemy.name} ===")
    
    # Player attacks
    damage = player.attack - enemy.defense + random.randint(-3, 3)
    enemy.take_damage(damage)
    print(f"You deal {damage} damage!")
    
    if enemy.health <= 0:
        print(f"You defeated {enemy.name}!")
        return True
    
    # Enemy attacks
    damage = enemy.attack - player.defense + random.randint(-2, 2)
    player.take_damage(damage)
    print(f"{enemy.name} deals {damage} damage!")
    
    return player.health > 0
\`\`\`

## Game Features

### Inventory System
Players can collect and use items:
- Weapons (increase attack)
- Armor (increase defense)
- Potions (heal health)
- Artifacts (special abilities)

### Story Choices
Major decisions affect the game's ending:

\`\`\`python
def make_choice(choices):
    print("\\nWhat will you do?")
    for i, choice in enumerate(choices, 1):
        print(f"{i}. {choice}")
    
    while True:
        try:
            selection = int(input("> "))
            if 1 <= selection <= len(choices):
                return selection
        except ValueError:
            pass
\`\`\`

## Development

### File Structure
\`\`\`
echoes_game/
├── main.py          # Game entry point
├── characters/      # Character classes
├── combat/          # Combat system
├── items/           # Item definitions
├── story/           # Narrative content
└── save/            # Save game files
\`\`\`

## Links

- <a class="inline-link link-cyan" href="https://github.com/Je0Dev/echoes_fallen_kingdom_game_python" target="_blank">GitHub</a>
    `,
    tech: ["Python", "Game Dev", "CLI"],
    category: "Software",
    readingTime: 20,
    image: "https://www.oldbookillustrations.com/site/assets/files/14431/sleeping-car.jpg",
    skills: [
      { title: "Python", description: "Game logic" },
      { title: "OOP", description: "Object-oriented design" },
      { title: "Game Dev", description: "Game mechanics" }
    ]
  },
  {
    id: "neon-vault",
    date: "2026-03-17",
    title: "Project: Neon Vault Web Game",
    type: "project",
    status: "published",
    excerpt: "A cyberpunk-themed endless runner web game with neon effects.",
    content: `# Project: Neon Vault Web Game

A cyberpunk-themed endless runner in <a class="inline-link link-yellow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>. The player navigates through a neon-lit digital vault, avoiding obstacles and collecting data packets.

## Overview

**Neon Vault** is a fast-paced endless runner game featuring:
- Procedurally generated obstacles
- Score tracking
- Progressive difficulty
- Neon visual effects
- Responsive controls

## Technical Implementation

### Game Loop

\`\`\`javascript
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.score = 0;
        this.speed = 5;
        this.obstacles = [];
        this.player = { x: 100, y: 300, width: 30, height: 30 };
    }
    
    update() {
        // Clear canvas
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update player
        this.updatePlayer();
        
        // Update obstacles
        this.updateObstacles();
        
        // Draw elements
        this.draw();
        
        // Check collisions
        this.checkCollisions();
        
        // Request next frame
        if (this.running) {
            requestAnimationFrame(() => this.update());
        }
    }
}
\`\`\`

### Neon Effects

\`\`\`javascript
function drawNeonRect(ctx, x, y, w, h, color) {
    // Outer glow
    ctx.shadowBlur = 20;
    ctx.shadowColor = color;
    
    // Main rectangle
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    
    // Inner bright part
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
}
\`\`\`

## Controls

- **Space/Up Arrow** - Jump
- **Down Arrow** - Slide
- **Left/Right** - Move laterally

## Features

### Obstacle Types
1. **Barriers** - Must jump over
2. **Low Gates** - Must slide under
3. **Moving Platforms** - Timing required
4. **Data Packets** - Collect for bonus points

### Power-ups
- **Speed Boost** - Temporary speed increase
- **Shield** - One-hit protection
- **Magnet** - Attract data packets

## Links

- <a class="inline-link link-green" href="https://github.com/Je0Dev/neon_vault_web_game_javascript" target="_blank">GitHub</a>
    `,
    tech: ["JavaScript", "Canvas", "Game Dev"],
    category: "Web Development",
    readingTime: 15,
    image: "https://www.oldbookillustrations.com/site/assets/files/14429/looking-for-vessel.jpg",
    skills: [
      { title: "JavaScript", description: "Game logic" },
      { title: "HTML Canvas", description: "Rendering" },
      { title: "Game Dev", description: "Game mechanics" }
    ]
  },
  {
    id: "imdb-clone",
    date: "2026-03-16",
    title: "Project: IMDB Clone App",
    type: "project",
    status: "published",
    excerpt: "An Android application in Java for movie browsing with watchlist management.",
    content: `# Project: IMDB Clone App

An Android application in <a class="inline-link link-orange" href="https://developer.android.com" target="_blank">Java</a> for movie browsing with watchlist management. Users can search movies, view details, and manage their watchlist.

## Overview

This app provides:
- Movie search functionality
- Movie details view (rating, synopsis, cast)
- Personal watchlist
- Watched movies tracking
- Favorites collection

## Architecture

### Database Schema (SQLite)

\`\`\`java
public class MovieContract {
    public static final String SQL_CREATE_MOVIES = 
        "CREATE TABLE movies (" +
        "id INTEGER PRIMARY KEY," +
        "title TEXT NOT NULL," +
        "rating REAL," +
        "year INTEGER," +
        "poster_url TEXT," +
        "synopsis TEXT)";
        
    public static final String SQL_CREATE_WATCHLIST =
        "CREATE TABLE watchlist (" +
        "movie_id INTEGER PRIMARY KEY," +
        "date_added TEXT," +
        "FOREIGN KEY(movie_id) REFERENCES movies(id))";
}
\`\`\`

### Data Models

\`\`\`java
public class Movie {
    private long id;
    private String title;
    private double rating;
    private int year;
    private String posterUrl;
    private String synopsis;
    private List<String> genres;
    private List<String> cast;
    
    // Getters and setters
}
\`\`\`

## Key Features

### Search
Users can search movies by title with autocomplete suggestions.

### Watchlist Management
\`\`\`java
public void addToWatchlist(long movieId) {
    ContentValues values = new ContentValues();
    values.put("movie_id", movieId);
    values.put("date_added", new Date().toString());
    db.insert("watchlist", null, values);
}
\`\`\`

## Links

- <a class="inline-link link-green" href="https://github.com/Je0Dev/ImdbCloneApp" target="_blank">GitHub</a>
    `,
    tech: ["Java", "Android", "SQLite"],
    category: "Mobile Development",
    readingTime: 12,
    image: "https://www.oldbookillustrations.com/site/assets/files/14428/astonished-crew.jpg",
    skills: [
      { title: "Java", description: "Android development" },
      { title: "SQLite", description: "Local database" },
      { title: "UI/UX", description: "Mobile interface" }
    ]
  },
  {
    id: "language-learning-website",
    date: "2026-04-06",
    title: "Note: Language Learning Website",
    type: "note",
    status: "published",
    excerpt: "A website for language learning with flashcards and progress tracking.",
    content: `# Note: Language Learning Website

A website for language learning with flashcards and progress tracking. This project helped me learn React while building something practical.

## Overview

The language learning platform includes:
- Flashcard system for vocabulary
- Spaced repetition algorithm
- Progress tracking dashboard
- Multiple language support
- User accounts (planned)

## Tech Stack

- <a class="inline-link link-green" href="https://react.dev" target="_blank">React</a>
- <a class="inline-link link-blue" href="https://typescriptlang.org" target="_blank">TypeScript</a>
- <a class="inline-link link-blue" href="https://tailwindcss.com" target="_blank">Tailwind</a>

## Flashcard System

\`\`\`typescript
interface Flashcard {
  id: string;
  front: string;      // Word in target language
  back: string;       // Translation
  language: string;
  difficulty: number; // 1-5
  nextReview: Date;
  correctCount: number;
}

interface Deck {
  id: string;
  name: string;
  cards: Flashcard[];
  language: string;
}
\`\`\`

## Spaced Repetition

The app uses a simplified SM-2 algorithm:

\`\`\`typescript
function calculateNextReview(card: Flashcard, quality: number): Date {
  const interval = card.correctCount * 2; // days
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);
  return nextDate;
}
\`\`\`

## Future Plans

- User authentication
- Multiple users
- Cloud sync
- Mobile app

## Links

- <a class="inline-link link-cyan" href="https://je0dev.github.io/lang_website/" target="_blank">Live Demo</a>
- <a class="inline-link link-green" href="https://github.com/Je0Dev/lang_website" target="_blank">GitHub</a>
    `,
    tech: ["React", "TypeScript", "Tailwind"],
    category: "Web Development",
    readingTime: 10,
    image: "https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg",
    skills: [
      { title: "React", description: "Frontend framework" },
      { title: "Spaced Repetition", description: "Learning algorithm" }
    ]
  },
  {
    id: "ece-learning-journey",
    date: "2026-03-25",
    title: "Note: My ECE Learning Journey",
    type: "note",
    status: "published",
    excerpt: "Reflections on my journey through Electrical and Computer Engineering.",
    content: `# Note: My ECE Learning Journey

Every journey begins with a single step, and mine began in a small classroom in Greece, staring at a blackboard filled with equations that seemed to belong to a different language. That was the moment I realized that engineering wasn't just about building things—it was about seeing the world in a fundamentally different way.

## The Beginning: Why ECE?

I still remember the confusion on my parents' faces when I told them I wanted to study Electrical and Computer Engineering. "Why not just study Computer Science?" they asked. "Isn't that more practical?" 

The truth is, I've always been fascinated by the intersection of hardware and software—the magic that happens when you press a button and something physical happens in the world. There's something deeply satisfying about understanding not just how software works, but how it interacts with the physical world through circuits, signals, and systems.

When I started at the University of Patras, I had no idea what I was getting into. I thought I liked math and physics—that's what got me into ECE in the first place. But I quickly learned that ECE is a different beast entirely. It's not just about knowing the theory; it's about being able to apply it to solve real problems.

## First Year: The Foundation

The first year of ECE is like drinking from a firehose while trying to stay afloat. Calculus, Linear Algebra, Physics—these aren't just abstract concepts to memorize. They're tools you'll use for the rest of your career.

I remember spending hours on Linear Algebra, trying to understand eigenvectors and eigenvalues. At the time, it felt like abstract torture. But now, when I work with machine learning algorithms or signal processing, I realize why it was so important. The mathematics isn't just academic—it's the language of engineering.

Programming fundamentals in C was my first real exposure to coding. I say "exposure" because at first, it felt like learning a completely new way of thinking. Variables, loops, functions—it was all so different from anything I'd done before. But there was something deeply satisfying about writing code that actually compiled and ran. The first time I wrote a program that worked correctly on the first try, I felt like I could conquer the world.

## Second Year: Things Get Real

Second year is where ECE starts to separate itself from pure mathematics. You move from theoretical concepts to actual hardware and real-world applications.

Digital Systems was a revelation. Finally, I could see how all that binary math actually became something useful. Building circuits with logic gates, understanding how computers think at the lowest level—it's the kind of knowledge that changes how you see every piece of technology around you.

Data Structures was another beast entirely. This was my introduction to computer science proper—the art of organizing and manipulating data efficiently. Arrays, linked lists, trees, graphs. Each one is a tool for a different job, and learning when to use which is a skill that takes years to master.

But the real highlight of second year was Signals and Systems. There's something almost magical about being able to transform a time-domain signal into its frequency representation and back again. It's like having a superpower—you can see patterns that others can't, understand behaviors that seem mysterious to everyone else.

## Third Year: The Deep Dive

By third year, you stop being a generalist and start becoming a specialist. The courses get more focused, the projects more complex, and the expectations higher.

Microprocessors was where hardware met software in a way I'd never experienced before. Writing assembly code, understanding how the CPU executes instructions at the lowest level—it's the kind of knowledge that makes you a better programmer overall. When you know what's happening under the hood, you write better code.

Control Systems opened my eyes to how we can make machines behave predictably. From simple thermostats to complex robotic arms, control theory is everywhere. The idea that you can mathematically guarantee how a system will behave—that's powerful stuff.

But it was Embedded Systems that really captured my imagination. There's something special about writing code that interacts directly with hardware. No operating system, no fancy abstractions—just you and the silicon. Every byte matters, every cycle counts. It's a different kind of programming, and I love it.

## The Projects: Learning by Doing

Theory is important, but engineering is ultimately about making things. That's why I'm so grateful for the project-based learning in our curriculum.

My CLI Task Manager was my first real software project—a command-line application that helped users manage their tasks. It taught me about file I/O, data structures, and user interface design. Most importantly, it taught me about the software development process itself: planning, coding, testing, refactoring.

The ATM System project was my introduction to object-oriented design. I learned about classes, inheritance, polymorphism—not as abstract concepts, but as tools for solving real problems. When you're designing a system that handles real money, you can't afford to be sloppy.

The ESP32 Timer Sensor project brought together everything I'd learned about embedded systems. Microcontroller programming, sensor interfacing, wireless communication—all in one project. There's nothing quite like seeing your code make something happen in the physical world.

And then there's the Neon Vault game—the project that taught me about game development, performance optimization, and working under pressure. Building a complete game from scratch is an education in itself.

## Learning New Languages: Rust, Go, Zig, C++, C#

One of the most valuable skills I've developed is the ability to learn new programming languages. Each language has its own philosophy, its own strengths, and its own way of thinking about problems.

Rust taught me about memory safety and ownership. The borrow checker was frustrating at first, but it taught me to think about memory in a way I'd never done before. Now, when I write code in any language, I'm more aware of what's happening with memory.

Go showed me the value of simplicity and concurrency. The goroutines and channels model is elegant in its simplicity. It's a language designed for practical problems, not theoretical elegance.

Zig is still a work in progress, but I'm impressed by its low-level approach. No hidden allocations, no magic—it gives you complete control over what's happening in your program.

C++ has been a journey. It's powerful but complex, and there's always more to learn. The balance between performance and readability is constantly challenging.

And C#, well, that's the language I'm using to explore different paradigms. The .NET ecosystem is vast, and there's always something new to discover.

## What I've Learned

After all these years, what do I know? More importantly, what do I understand?

I've learned that engineering isn't about having all the answers—it's about knowing how to find them. The technology landscape changes so fast that what you learn today will be obsolete in five years. What matters isn't the specific technology, but the ability to learn new things quickly.

I've learned that collaboration is essential. The best engineers aren't the ones who know everything—they're the ones who know how to work with others to solve problems. Code reviews, pair programming, open source contributions—these aren't just best practices, they're how you grow as an engineer.

I've learned that failure is okay. Some of my best learning experiences came from projects that failed spectacularly. The ATM system that crashed, the game that was too slow, the embedded system that did nothing but overheat—all of these taught me more than the successes ever could.

## What's Next

The road ahead is long. I still have years left in my degree, and a lifetime of learning ahead. But I'm excited about the possibilities.

I'm particularly interested in embedded systems and low-level programming. There's something deeply satisfying about writing code that runs close to the metal, that has direct access to hardware, that every cycle matters. I want to explore real-time systems, robotics, and perhaps even operating system development.

I also want to contribute more to open source. The open source community has given me so much—free tools, educational resources, code I could learn from. I want to give back, to contribute to projects that help others the way they've helped me.

And who knows? Maybe I'll pursue a master's degree, maybe in embedded systems, maybe in something else entirely. The beautiful thing about ECE is that it opens so many doors. Hardware, software, theory, application—so many paths to explore.

## The Journey Continues

As I write this, I'm reminded that this is just one chapter in a much longer story. The ECE student of today will become the engineer of tomorrow, and there's no telling what technologies we'll be working with, what problems we'll be solving.

But I know one thing: I'm exactly where I want to be. Struggling with difficult concepts, building projects that sometimes work and sometimes don't, learning new things every single day—that's the life I chose, and I wouldn't trade it for anything.

The blackboard full of equations that once confused me so much? Now I see it as a map of possibilities. Every concept, every theory, every project—it's all part of a journey that's only just beginning.

Here's to the next step.
    `,
    tech: ["Education", "ECE"],
    category: "Reflections",
    readingTime: 15,
    image: "https://www.oldbookillustrations.com/site/assets/files/14449/boyed-floating-tackle.jpg",
    skills: [
      { title: "Problem Solving", description: "Analytical thinking" },
      { title: "Systems Thinking", description: "Holistic approach" }
    ]
  },
  {
    id: "learning-rust",
    date: "2026-04-06",
    title: "Note: Learning Rust",
    type: "note",
    status: "published",
    excerpt: "My journey learning Rust for systems programming.",
    content: `# Note: Learning Rust

There's a moment in every programmer's life when they encounter a language that makes them question everything they thought they knew about programming. For me, that language was Rust.

I first heard about Rust years ago—everyone in the programming community seemed to be talking about it. "It's the most loved programming language," they said. "It has a steep learning curve," they warned. "The borrow checker will break you," they joked. But I never really understood why until I actually sat down and tried to learn it.

## The First Attempt

My first encounter with Rust was, to put it mildly, humbling. I'd spent years writing code in C, Python, Java—languages where I could do basically whatever I wanted without the compiler complaining too much. Rust was different.

I wrote what I thought was a simple function. The compiler responded with an error about lifetimes that I couldn't make heads or tails of. I tried to fix it. Another error. Then another. After an hour of fighting, I closed the editor and told myself I'd come back to it later.

That "later" took a while to arrive.

## The Second Attempt

A few months later, I decided to give Rust another try. This time, I came prepared. I started with "The Book"—the official Rust programming guide. And something clicked.

The problem with my first attempt wasn't that Rust was too hard. It was that I was approaching it wrong. I was trying to write code the way I always had, and expecting Rust to accept it. But Rust isn't just a different language—it's a different way of thinking about memory, about ownership, about safety.

The borrow checker isn't your enemy. It's your teacher. It's teaching you to think about memory in a way that most high-level languages never do. Once I understood that, everything changed.

## Understanding Ownership

The first big concept to grasp in Rust is ownership. In most languages, you don't really think about what happens to memory when you assign a value to a variable. You just assume it works. But in Rust, every value has exactly one owner, and when that owner goes out of scope, the value is dropped.

This sounds restrictive at first—and it is, initially. But it eliminates an entire class of bugs. No more use-after-free bugs. No more double-free bugs. No more null pointer dereferences (well, mostly). The compiler catches these errors at compile time, before your code ever runs.

The first time I wrote a Rust program that compiled cleanly, I felt a strange sense of pride. The compiler had actually verified that my code was safe. That's not something I could say about code I'd written in other languages.

## The Joy of Pattern Matching

One of my favorite features of Rust is pattern matching. It's not unique to Rust—functional languages have had it for decades—but the way Rust implements it feels particularly elegant.

Match expressions let you handle different cases with ease:

\`\`\`rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}

fn handle_result(r: Result<i32, String>) {
    match r {
        Ok(value) => println!("Got: {}", value),
        Err(error) => println!("Error: {}", error),
    }
}
\`\`\`

This is so much cleaner than the if-else chains I'm used to from other languages. And the compiler ensures you handle every possible case, so you never forget a corner case again.

## The Error Handling Revolution

Speaking of errors—Rust's approach to error handling changed how I think about writing robust code. In other languages, you either use exceptions (which can be caught anywhere and make control flow hard to follow) or return error codes (which are easy to ignore). Rust gives you something better: the Result type.

Functions that can fail return \`Result<T, E>\$. You explicitly handle the success and error cases. It's more verbose, but it's also crystal clear. You can never accidentally ignore an error because the compiler will warn you if you don't handle both branches.

And the \`?\` operator makes propagating errors almost as easy as throwing exceptions:

\`\`\`rust
fn read_file_contents(path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}
\`\`\`

This is concise, explicit, and safe. What's not to love?

## Concurrency Without Fear

One of Rust's biggest promises is safe concurrency. In other languages, data races are insidious bugs that can hide in production for years, only manifesting under specific timing conditions. Rust makes data races impossible by default.

The ownership system extends to threading. If you try to share data between threads without proper synchronization, the compiler catches it. You can't accidentally create a data race because the compiler won't let you.

And Rust's async/await makes writing concurrent code almost as easy as writing synchronous code. The distinction between "blocking" and "non-blocking" becomes less important when you can write asynchronous code that looks synchronous.

## The Ecosystem

Rust's standard library is surprisingly complete. Strings, collections, file I/O, networking—all built-in. But where Rust really shines is its ecosystem of third-party libraries.

Cargo, Rust's package manager, is a joy to use. Dependencies are declared in your Cargo.toml, and Cargo handles everything: fetching, compiling, versioning. It's like having a super-powered pip/npm bundle in one tool.

Crates.io, the package registry, has libraries for almost everything. Need to parse JSON? Serde has you covered. Want to make HTTP requests? Reqwest is excellent. Building a web server? Choose from Rocket, Actix-web, Axum, and many more.

## The Community

What strikes me most about Rust is its community. The people who use Rust genuinely care about writing good code. They're helpful, patient, and passionate about the language.

The Rust Discord server, the Rust subreddit, the Rust forums—there's always someone willing to help, whether you're a complete beginner or an experienced developer learning a new concept.

And Rust's commitment to inclusivity is refreshing. The Rust team has worked hard to make the language and its community welcoming to everyone. That's not just good ethics—it's good engineering. Diverse teams build better software.

## What I've Built

My Rust journey has included several projects, each teaching me something new. A command-line todo app taught me the basics. An HTTP server introduced me to async programming. A simple database implementation pushed me to understand memory management at a deeper level.

Each project was frustrating at times—fighting the borrow checker, deciphering cryptic error messages, rethinking my approach to problems. But each project also taught me something that made me a better programmer, even in other languages.

I now think about memory safety when I write code in any language. I handle errors more explicitly. I use pattern matching more often. I think about concurrency more carefully. Rust has made me a better programmer, even when I'm not writing Rust.

## The Road Ahead

I'm still learning Rust. I suspect I always will be. There's always more to learn: unsafe Rust, macros, custom allocators, embedded systems programming. The depth of the language is almost overwhelming.

But that's also what makes it exciting. Unlike languages where you've "learned" everything there is to know after a few months, Rust keeps giving. There's always a new technique to learn, a new pattern to discover, a new way to think about problems.

The learning curve is real. The borrow checker will frustrate you. You'll write code that doesn't compile, then write different code that doesn't compile for a different reason. You'll spend hours debugging a problem only to realize the compiler could have told you exactly what was wrong if you'd only read the error message more carefully.

But there's a payoff. When your Rust code compiles, it's correct. When it runs, it's fast. And when you look back at what you've learned, you realize you've grown as a programmer in ways you didn't expect.

So if you're thinking about learning Rust—do it. Embrace the struggle. Fight the borrow checker. Read the error messages. Ask for help when you need it.

And remember: the compiler is your friend.
    `,
    tech: ["Rust", "Systems Programming"],
    category: "Learning",
    readingTime: 12,
    image: "https://www.oldbookillustrations.com/site/assets/files/14448/silent-melancholy.jpg",
    skills: [
      { title: "Rust", description: "Memory-safe systems programming" },
      { title: "Ownership", description: "Rust's unique feature" }
    ]
  },
  {
    id: "learning-go",
    date: "2026-04-06",
    title: "Note: Learning Go",
    type: "note",
    status: "published",
    excerpt: "Exploring Go for backend development and concurrency.",
    content: `# Note: Learning Go

After the intensity of learning Rust, I was ready for something different. I wanted a language that was simpler, more practical, and better suited for building real-world applications without as much of a learning curve. That's when I turned to Go.

I first encountered Go at a hackathon a couple of years ago. Someone was using it to build a microservice, and I was impressed by how quickly they could spin up a working API. "It's like Python but compiled," they told me. That intrigued me.

## The Philosophy of Simplicity

What strikes me most about Go is its philosophy of intentional simplicity. Unlike many modern languages that keep adding features, Go has deliberately remained small. There's no generics (until recently), no exceptions, no fancy type system. Just simple, readable code that does what it says.

This simplicity isn't a limitation—it's a feature. When I write Go, I spend less time fighting the language and more time solving actual problems. The code I write is easy to understand, easy to maintain, and easy to refactor.

Go's creators understood something important: most code is read more often than it's written. So they optimized for readability over expressiveness. You can pick up a Go codebase you've never seen and understand it within minutes. That's not something you can say about C++ or even Rust.

## The Go Playground

One of the things I love about Go is the Go Playground. It's a web-based environment where you can write and run Go code instantly, no setup required. It's perfect for experimenting, sharing snippets, and testing ideas.

I spent hours in the playground when I was learning Go, just trying out different patterns and seeing how things worked. There's something liberating about being able to experiment without any friction. No installing tools, no configuring environments—just code.

The playground also makes it easy to share code with others. Need to demonstrate a concept? Share a playground link. Want help with a bug? Paste your code into the playground and share it. It's that simple.

## Goroutines: Concurrency Made Easy

Go's approach to concurrency is one of its most powerful features. Goroutines are lightweight threads managed by the Go runtime, not the operating system. You can spawn thousands of goroutines without any issues.

\`\`\`go
func main() {
    // Spawn a goroutine
    go sayHello()
    
    // Wait a bit
    time.Sleep(time.Second)
}

func sayHello() {
    fmt.Println("Hello!")
}
\`\`\`

But the real magic is channels. Channels let goroutines communicate and synchronize safely:

\`\`\`go
func main() {
    ch := make(chan string)
    
    go func() {
        ch <- "Hello from goroutine!"
    }()
    
    msg := <-ch
    fmt.Println(msg)
}
\`\`\`

This simple pattern makes concurrency approachable. You don't need to worry about locks or mutexes or race conditions—channels handle all of that for you.

I built a simple web scraper using goroutines and channels, and it was a revelation. I could fetch multiple pages simultaneously, process results concurrently, and coordinate everything with channels. The code was clean, understandable, and fast.

## The Standard Library

Go's standard library is outstanding. From HTTP servers to JSON parsing to file I/O, it's all built-in. Need to create a web server? The net/http package has you covered. Need to parse JSON? encoding/json is there. Need to work with files? os and io packages handle it all.

This means you can build real applications without reaching for third-party libraries. Of course, the Go ecosystem has excellent libraries for when you need them, but the standard library is sufficient for most tasks.

Here's a complete HTTP server in Go, just using the standard library:

\`\`\`go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
\`\`\`

That's it. One file, no dependencies, and you have a working HTTP server. Try doing that in most other languages.

## Error Handling

Go's approach to error handling is simple but effective. Functions return an error as their last return value. You check for errors explicitly.

\`\`\`go
result, err := doSomething()
if err != nil {
    return err
}
\`\`\`

At first, this felt verbose. Why do I have to check errors everywhere? But I came to appreciate it. Errors aren't hidden in exception hierarchies—they're just values. You can handle them however you want, propagate them up the call stack, or wrap them with context.

No more "catch all the exceptions at the top" patterns. No more silent failures. Errors are visible, explicit, and handled appropriately.

## Build Speed

One of Go's killer features is its build speed. Go compiles incredibly fast—even for large projects. This makes the development loop incredibly satisfying. Change a file, build, test, repeat. It's almost as fast as interpreted languages but produces native binaries.

The go tool is also excellent. go build, go test, go run, go mod—these commands just work. There's no complex configuration, no cryptic flags, no magic. It does what you'd expect.

## The Go Community

The Go community is pragmatic and welcoming. Go isn't a flashy language—it's a tool for getting things done. And the people who use it tend to share that philosophy.

Go conferences are filled with people talking about practical solutions to real problems. Go meetups are collaborative and helpful. The Go subreddit is less toxic than most programming communities.

I also appreciate Go's commitment to backward compatibility. Code you write today will still compile in future versions of Go. That's important for long-term maintenance and for building trust with users.

## What I've Built

My Go journey has included several practical projects. A REST API for managing tasks. A simple CLI tool for processing CSV files. A web scraper that fetches and analyzes pages concurrently.

Each project reinforced what I love about Go: the simplicity, the tooling, the standard library. I never felt like I was fighting the language—instead, it felt like a partner in solving problems.

I also appreciate how testable Go code is. The testing package makes writing tests easy, and the conventions around testing (table-driven tests, subtests) are practical and scalable.

## Tradeoffs

Go isn't perfect. The lack of generics (until recently) made some patterns awkward. The error handling can be verbose. The type system is simple, which means less expressiveness than languages like Rust.

And I've never been a huge fan of the go fmt tool. The formatting rules are fine, but auto-formatting on save can be jarring when you're still figuring things out.

But these are minor complaints. For the kinds of problems I use Go for—backend services, CLI tools, network utilities—it's an excellent choice.

## Go and Me

Go has found a permanent place in my toolkit. It's not my only language—I still use Python for quick scripts, Rust for systems programming, and TypeScript for web development. But Go fills a specific niche: practical, fast, simple programming for real-world problems.

What I appreciate most is Go's honesty. It doesn't try to be everything to everyone. It doesn't chase trends or add flashy features. It's a mature, stable language designed for building software that matters.

In a world of ever-more-complex programming languages, there's something refreshing about Go's simplicity. It's a reminder that sometimes, the best solution is the straightforward one.

I'm not done learning Go—there are still areas I want to explore, like embedded systems with TinyGo, or building more sophisticated microservices. But I'm confident that Go will remain a valuable part of my programming toolkit for years to come.
    `,
    tech: ["Go", "Backend"],
    category: "Learning",
    readingTime: 10,
    image: "https://www.oldbookillustrations.com/site/assets/files/14432/hanging-one-hand.jpg",
    skills: [
      { title: "Go", description: "Simple, fast, concurrent" },
      { title: "Goroutines", description: "Lightweight threads" }
    ]
  },
  {
    id: "learning-zig",
    date: "2026-04-06",
    title: "Note: Learning Zig",
    type: "note",
    status: "published",
    excerpt: "Discovering Zig for low-level programming.",
    content: `# Note: Learning Zig

After learning Rust and Go, I wanted to explore something even closer to the metal. That's when I discovered Zig—a language that bills itself as "a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software."

What drew me to Zig was its philosophy: no hidden control flow, no hidden memory allocations, no preprocessor. Everything is explicit, everything is visible. It's a language that trusts the programmer.

## First Impressions

My first encounter with Zig was... confusing, honestly. The syntax was unfamiliar, and some of the concepts were different from anything I'd seen before. But there was something appealing about its directness. No magic, no abstractions hiding what your code actually does.

I started by reading through the official documentation and trying to understand Zig's core principles. What I found was a language that's unapologetically low-level while still being modern and practical.

## No Hidden Control Flow

One of Zig's key principles is "no hidden control flow." This means that things that are implicit in other languages are explicit in Zig.

For example, in C, the preprocessor can completely transform your code before compilation. In Zig, there's no preprocessor. What you see is what you get.

Similarly, in many languages, operator overloading can hide what actually happens when you use operators. In Zig, operator overloading doesn't exist. If you use the + operator, you know exactly what code will run.

This makes code more predictable and easier to understand. When you read Zig code, you don't have to wonder what hidden transformations are happening. The code does what it says.

## Manual Memory Management

Zig gives you direct control over memory. There's no garbage collector, no automatic reference counting, no hidden allocations. You're responsible for managing memory yourself.

This sounds scary, but it's actually liberating. You know exactly when memory is allocated and when it's freed. There are no surprises, no runtime overhead, no mysterious pauses while the garbage collector does its work.

Zig does provide tools to help with memory management, like allocators and defer statements:

\`\`\`zig
const std = @import("std");

pub fn main() void {
    var allocator = std.heap.page_allocator;
    
    // Allocate memory
    const memory = allocator.alloc(u8, 100) catch |err| {
        std.debug.print("Error: {}\\n", .{err});
        return;
    };
    defer allocator.free(memory); // Automatic cleanup
    
    std.debug.print("Allocated {} bytes\\n", .{memory.len});
}
\`\`\`

The defer statement ensures that memory is freed even if the code returns early. This is similar to Rust's RAII, but it's explicit rather than automatic.

## C Interoperability

One of Zig's killer features is its seamless C interoperability. You can call C functions directly from Zig, and you can call Zig functions from C. This makes Zig perfect for extending existing C projects or adding modern features to legacy codebases.

I used this feature to add Zig code to a C project I was working on. It was surprisingly smooth—Zig's build system handles the C compilation and linking automatically. I could write new functionality in Zig while keeping the existing C code.

This also makes Zig great for writing C libraries. Instead of writing C directly (which can be error-prone), you can write in Zig and export a C-compatible ABI. You get the safety of Zig with the compatibility of C.

## Comptime

Zig's compile-time execution (comptime) is another powerful feature. You can execute code at compile time, which is useful for generating data, validating types, and creating custom syntax-like constructs.

\`\`\`zig
fn Matrix(comptime T: type, comptime rows: usize, comptime cols: usize) type {
    return [rows][cols]T;
}

const Mat = Matrix(f32, 4, 4);
\`\`\`

This allows for powerful metaprogramming without needing a separate code generation step. The compiler evaluates the code and generates the appropriate types.

## Error Handling

Zig's error handling is explicit and practical. Functions return error unions, and you handle errors explicitly:

\`\`\`zig
const result = maybeFails() catch |err| {
    std.debug.print("Error: {}\\n", .{err});
    return err;
};
\`\`\`

You can also use try to propagate errors:

\`\`\`zig
const data = try readFile("input.txt");
\`\`\`

This is similar to Rust's ? operator, but more explicit. You always know when errors might occur because they're part of the type signature.

## The Zig Community

The Zig community is small but passionate. Andrew Kelley, Zig's creator, is actively involved and responsive to feedback. The language is still evolving, and there's a sense that you're part of something that's being built in real-time.

What I appreciate is the honesty about Zig's status. It's not pretending to be a finished product. It's a work in progress, and the community understands that.

## What I've Learned

Zig has taught me to think differently about low-level programming. It shows that you can have modern language features while still being close to the metal. The explicit nature of the language makes me more aware of what's happening in my code.

I'm not sure if Zig will become my primary language—it still has a small ecosystem and limited library support. But as a tool for specific tasks (low-level programming, C interop, embedded systems), it's excellent.

## The Future

Zig is still a young language, and its future is uncertain. It could become the next big thing in systems programming, or it could remain a niche tool. Either way, I believe it has something valuable to teach us about programming.

The ideas behind Zig—explicit over implicit, manual over automatic, simple over complex—apply regardless of whether Zig itself succeeds. These principles have made me a better programmer, even when I work in other languages.

And who knows? Maybe Zig will become the next Rust. It's certainly ambitious enough. The combination of low-level control, C interoperability, and modern tooling is compelling. I'll be watching its progress with interest.
    `,
    tech: ["Zig", "Systems Programming"],
    category: "Learning",
    readingTime: 10,
    image: "https://www.oldbookillustrations.com/site/assets/files/14431/sleeping-car.jpg",
    skills: [
      { title: "Zig", description: "Low-level programming" },
      { title: "Memory", description: "Manual management" }
    ]
  },
  {
    id: "learning-csharp",
    date: "2026-04-06",
    title: "Note: Learning C#",
    type: "note",
    status: "published",
    excerpt: "Exploring C# for game development and .NET.",
    content: `# Note: Learning C#

When I first started programming, I thought I'd never touch anything from Microsoft. The world of open source and Linux felt more aligned with my values. But sometimes life has a way of surprising you.

My journey with C# began with a game engine called Unity. I'd always been fascinated by game development, and Unity was (and still is) the most accessible way to bring game ideas to life. But Unity uses C#, so I had to learn it whether I wanted to or not.

## First Encounter: Unity

I remember downloading Unity Hub and creating my first project. The editor was intimidating—windows everywhere, panels for everything, settings for everything. And then I opened the script editor and saw C# code for the first time.

\`\`\`csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 5f;
    
    void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");
        
        Vector3 movement = new Vector3(moveX, moveY, 0) * speed * Time.deltaTime;
        transform.Translate(movement);
    }
}
\`\`\`

It looked familiar enough—curly braces, semicolons, similar to Java which I'd learned in school. But the Unity-specific parts were confusing. What was a MonoBehaviour? Why did everything inherit from it? What was Update() and when did it get called?

I spent weeks just trying to understand the basics. How do I make the player move? How do I detect collisions? How do I play sounds? Each question led to more questions, more tutorials, more documentation.

## The .NET Ecosystem

What surprised me about C# was the broader ecosystem. It's not just for games—it's used for web development (ASP.NET), desktop applications (WPF, WinForms), mobile apps (Xamarin, .NET MAUI), cloud services (Azure), and more.

I started exploring other uses of C#. I built a simple desktop application using WPF—just a window with some buttons and text boxes. The declarative XAML syntax was elegant, and the event-driven model made sense.

\`\`\`csharp
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="My First App" Height="350" Width="525">
    <Grid>
        <Button Content="Click Me" Click="Button_Click"/>
    </Grid>
</Window>
\`\`\`

I also experimented with ASP.NET Core for web development. The middleware pattern was interesting—building up a pipeline of request processing, each piece doing something specific. It was architecturally clean, even if the learning curve was steep.

## Object-Oriented Programming

C# is fundamentally an object-oriented language, and learning C# meant really understanding OOP. Classes, inheritance, polymorphism, interfaces—these aren't just keywords in C#, they're the primary tools for structuring code.

I remember the moment interfaces clicked for me. I was building a game with different types of enemies—goblins, orcs, dragons. Each had similar behaviors (move, attack, take damage) but implemented differently. An interface let me define a contract:

\`\`\`csharp
public interface IDamageable
{
    void TakeDamage(int amount);
    int CurrentHealth { get; }
}

public class Goblin : MonoBehaviour, IDamageable
{
    public int CurrentHealth { get; private set; }
    
    public void TakeDamage(int amount)
    {
        CurrentHealth -= amount;
        if (CurrentHealth <= 0) Die();
    }
}
\`\`\`

Now I could write code that worked with any IDamageable, regardless of the specific type. The code was more flexible, more reusable, more elegant.

## LINQ: A Game Changer

One of C#'s most powerful features is LINQ (Language Integrated Query). It lets you query collections using a SQL-like syntax, making data manipulation surprisingly elegant.

\`\`\`csharp
var highScorePlayers = players
    .Where(p => p.Score > 1000)
    .OrderByDescending(p => p.Score)
    .Take(10)
    .Select(p => p.Name);

foreach (var name in highScorePlayers)
{
    Console.WriteLine(name);
}
\`\`\`

This is so much cleaner than the traditional loop-based approach. It's declarative—you say what you want, not how to get it. After using LINQ, going back to imperative loops feels primitive.

## Async/Await

Asynchronous programming is essential for modern applications, and C# handles it elegantly with async/await. What could be confusing callback hell in other languages becomes surprisingly readable in C#.

\`\`\`csharp
public async Task<string> FetchUserData(int userId)
{
    var client = new HttpClient();
    var response = await client.GetAsync($"https://api.example.com/users/{userId}");
    return await response.Content.ReadAsStringAsync();
}
\`\`\`

The code looks synchronous, but it won't block the calling thread. This is crucial for responsive applications, especially when dealing with network requests or file I/O.

## The C# Community

The C# community is massive and well-established. Stack Overflow has answers to virtually any question. Microsoft provides excellent documentation. There are countless tutorials, courses, and books.

What I appreciate is the consistency. New language features are added regularly (records, pattern matching, source generators), but they're backward compatible. Code I wrote five years ago still compiles and runs.

## Tradeoffs

C# isn't perfect. The .NET ecosystem is large but can be overwhelming. There are multiple frameworks for each type of application, and choosing the right one isn't always clear.

Dependency management with NuGet can be a nightmare. Version conflicts, deprecated packages, abandoned libraries—it's a jungle out there.

And while C# is cross-platform now, it still feels most at home on Windows. Some libraries only work on Windows, some tooling is Windows-specific. It's better than it used to be, but not as frictionless as something like Go.

## What C# Taught Me

Learning C# taught me about the enterprise software world. It's a language designed for building large, complex applications that need to be maintained over years. The emphasis on type safety, tooling, and conventions reflects that.

It also taught me about game development patterns—entity-component systems, update loops, physics simulation, AI behaviors. These concepts transfer to other engines and frameworks.

And it showed me the value of a mature ecosystem. Having a standard library that does practically everything, package managers that work reasonably well, and IDEs that understand your code—these things matter more than I initially realized.

## Looking Forward

I'm still using C# for Unity development. My game projects continue, and I'm always learning new patterns and techniques. The recent additions to the language (records, pattern matching, global usings) keep it fresh.

I'm also interested in exploring .NET MAUI for cross-platform mobile development, and possibly Blazor for web applications. The ecosystem keeps expanding, and there's always more to learn.

C# surprised me. I thought I'd never use Microsoft technologies, but I've found a language and ecosystem that genuinely work well for certain types of projects. It's not my first choice for everything, but it's excellent for what it's designed for.

And who knows? Maybe one day I'll build that full application—a game, a web service, a desktop tool—that makes all this learning worthwhile.
    `,
    tech: ["C#", "Unity", ".NET"],
    category: "Learning",
    readingTime: 12,
    image: "https://www.oldbookillustrations.com/site/assets/files/14429/looking-for-vessel.jpg",
    skills: [
      { title: "C#", description: "Microsoft's language" },
      { title: "Unity", description: "Game engine" }
    ]
  },
  {
    id: "learning-cpp",
    date: "2026-04-06",
    title: "Note: Learning C++",
    type: "note",
    status: "published",
    excerpt: "Deep dive into C++ for systems programming.",
    content: `# Note: Learning C++

<a class="inline-link link-blue" href="https://isocpp.org/" target="_blank">C++</a> is a powerful systems language.

## Why C++?

C++ is used for:
- Game engines (Unreal, Unity)
- Operating systems
- High-performance applications
- Embedded systems
- Compilers and interpreters

## Key Features

### Classes and Objects
\`\`\`cpp
class Player {
private:
    std::string name;
    int health;
    int score;
    
public:
    Player(const std::string& n) : name(n), health(100), score(0) {}
    
    void addScore(int points) {
        score += points;
    }
    
    int getScore() const {
        return score;
    }
};
\`\`\`

### Templates
\`\`\`cpp
template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Usage
int m = max(5, 10);
std::string s = max("hello", "world");
\`\`\`

### Smart Pointers
\`\`\`cpp
#include <memory>

void example() {
    // Unique pointer - automatic cleanup
    auto ptr = std::make_unique<int>(42);
    std::cout << *ptr << std::endl;
    
    // Shared pointer - reference counted
    auto shared = std::make_shared<int>(100);
    auto copy = shared; // Reference count = 2
}
\`\`\`

### STL Containers
\`\`\`cpp
#include <vector>
#include <map>
#include <algorithm>

int main() {
    std::vector<int> numbers = {5, 2, 8, 1, 9};
    std::sort(numbers.begin(), numbers.end());
    
    std::map<std::string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;
}
\`\`\`

## Modern C++ (C++11/14/17/20)

### Auto
\`\`\`cpp
auto x = 5;           // int
auto y = 3.14;        // double
auto z = "hello";    // const char*
\`\`\`

### Range-based for
\`\`\`cpp
std::vector<int> nums = {1, 2, 3, 4, 5};
for (auto n : nums) {
    std::cout << n << " ";
}
\`\`\`

## Resources

- <a class="inline-link link-green" href="https://en.cppreference.com/" target="_blank">cppreference</a>
- <a class="inline-link link-cyan" href="https://www.learncpp.com/" target="_blank">LearnCpp</a>
    `,
    tech: ["C++", "Systems Programming"],
    category: "Learning",
    readingTime: 15,
    image: "https://www.oldbookillustrations.com/site/assets/files/14428/astonished-crew.jpg",
    skills: [
      { title: "Modern C++", description: "C++11/17/20 features" },
      { title: "Performance", description: "Zero-cost abstractions" }
    ]
  }
];