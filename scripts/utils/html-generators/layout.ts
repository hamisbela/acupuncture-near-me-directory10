export function generateHead(title: string, description: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link rel="icon" type="image/png" href="${defaultImages.favicon}" />
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'indigo': {
              50: '#eef2ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81'
            }
          }
        }
      }
    }
  </script>
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Leaflet CSS for maps -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <!-- Custom styles -->
  <style>
    /* Custom styles for Directory */
    :root {
      --primary-color: #4338ca;
      --primary-light: #c7d2fe;
      --primary-dark: #312e81;
      --secondary-color: #8b5cf6;
      --text-color: #1f2937;
      --light-text: #6b7280;
      --background: #f9fafb;
      --white: #ffffff;
      --gray-light: #f3f4f6;
      --success: #10b981;
      --warning: #f59e0b;
      --error: #ef4444;
      --info: #3b82f6;
    }

    /* Global Styles */
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.5;
      color: var(--text-color);
    }

    a {
      transition: color 0.2s ease;
    }

    /* Salon Cards */
    .salon-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .salon-card:hover {
      transform: translateY(-5px);
    }

    /* Button Hover Effects */
    .btn-primary:hover {
      box-shadow: 0 4px 12px rgba(67, 56, 202, 0.15);
    }

    /* Header Shadow on Scroll */
    .header-scrolled {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    /* Image Gallery Styles */
    .gallery-image {
      transition: opacity 0.2s ease;
    }

    .gallery-image:hover {
      opacity: 0.9;
    }

    /* Custom Features Icons */
    .feature-icon {
      width: 48px;
      height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    /* Map Container */
    .map-container {
      height: 300px;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    /* Hero Section Gradient */
    .hero-gradient {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    }

    /* Custom Pagination */
    .pagination-item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 4px;
    }

    .pagination-item.active {
      background-color: var(--primary-color);
      color: white;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--gray-light);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary-light);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color);
    }

    /* Form Focus States */
    input:focus, 
    select:focus, 
    textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(67, 56, 202, 0.1);
    }

    /* Rating Stars */
    .stars-container {
      color: var(--warning);
    }

    /* Business Hours Table */
    .hours-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
    }

    .hours-table tr {
      border-bottom: 1px solid #eee;
    }

    .hours-table tr:last-child {
      border-bottom: none;
    }

    .hours-table td {
      padding: 8px 0;
    }

    .hours-table td:first-child {
      font-weight: 500;
      width: 40%;
    }

    /* Card Elements */
    .card-fancy {
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card-fancy:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    /* Salon Page Specific Styles */
    .salon-hero {
      position: relative;
    }

    .salon-hero-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
      padding: 3rem 1rem 1rem;
    }

    .amenity-tag {
      display: inline-flex;
      align-items: center;
      background: var(--gray-light);
      border-radius: 9999px;
      padding: 0.35rem 0.75rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    .amenity-tag i {
      margin-right: 0.35rem;
      color: var(--primary-color);
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .container {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      h1 {
        font-size: 1.875rem !important;
      }
      
      h2 {
        font-size: 1.5rem !important;
      }
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800">`;
}