# Gradify: Your Academic Companion

Gradify is a web application created with Next.js, React, Prisma, Tailwind CSS, and MongoDB, designed exclusively for university students. It helps students calculate their GPA and save their academic results online. Whether you're a university student looking to manage your academic performance, Gradify has got you covered.

## Features

- **GPA Calculation**: Easily calculate your GPA by inputting your course grades and credits.
- **Save Your Results**: Store your university academic results securely online for easy access and tracking.
- **Interactive Dashboard**: View your GPA trends and progress over time through an interactive dashboard.
- **User Authentication**: Register and log in to keep your academic data private and accessible only to you.
- **OAuth Authentication**: Sign up and log in using your Facebook or Google accounts for added convenience and security.
- **Mobile Responsive**: Access Gradify on any device, ensuring a seamless experience whether you're on your computer or smartphone.

## Getting Started

To get Gradify up and running on your local machine, follow these steps:

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the Gradify repository to your local machine:

   ```bash
   git clone https://github.com/kcokoji/gradify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gradify
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env.local` file in the root directory of the project and configure your environment variables:

   ```plaintext
   NEXTAUTH_URL=http://localhost:3000/api
   DATABASE_URL=mongodb://localhost:27017/gradify
   SECRET_KEY=your-secret-key
   FACEBOOK_CLIENT_ID=your-facebook-client-id
   FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

   - `NEXTAUTH_URL`: The URL of your API.
   - `DATABASE_URL`: The connection URL for your MongoDB database.
   - `SECRET_KEY`: A secret key for encrypting session data.
   - `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET`: Your Facebook OAuth application credentials.
   - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Your Google OAuth application credentials.

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Visit [http://localhost:3000](http://localhost:3000) in your web browser to access Gradify.

### Usage

1. Register for an account or log in using your email, Facebook, or Google account.

2. Add your university courses and grades to calculate and track your GPA.

3. Explore the interactive dashboard to monitor your academic progress.

## Contributing

We welcome contributions from the community! If you're a university student and would like to contribute to Gradify, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the open-source community for their fantastic libraries and tools that make Gradify possible.

---

Enjoy using Gradify to manage your university academic performance! If you encounter any issues or have suggestions for improvements, please feel free to [report them](https://github.com/kcokoji/gradify/issues).
