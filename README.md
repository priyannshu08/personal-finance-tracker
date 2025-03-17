# Personal Finance Tracker

A modern, responsive web application for tracking personal finances built with Next.js 13, React, and shadcn/ui.

![Personal Finance Tracker](https://i.imgur.com/YourScreenshot.jpg)

## Features

### Stage 1 Implementation (Current)
- ✅ Add, edit, and delete transactions
- ✅ Transaction amount and date tracking
- ✅ Detailed transaction descriptions
- ✅ Monthly expenses visualization with bar chart
- ✅ Responsive design for all devices
- ✅ Form validation
- ✅ Dark mode UI with modern aesthetics
- ✅ Real-time updates

## Tech Stack

- **Framework:** Next.js 13
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-finance-tracker.git
```

2. Install dependencies:
```bash
cd personal-finance-tracker
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Adding Transactions**
   - Click the "Add Transaction" button
   - Enter amount (negative for expenses, positive for income)
   - Add description and date
   - Click Save

2. **Editing Transactions**
   - Click the edit icon on any transaction
   - Modify the details
   - Save changes

3. **Deleting Transactions**
   - Click the delete icon on any transaction
   - Transaction will be removed immediately

4. **Viewing Analytics**
   - Monthly expenses are automatically visualized in the bar chart
   - Chart updates in real-time as you add/edit/delete transactions

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ExpensesChart.tsx
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   └── ui/
├── lib/
│   └── types.ts
└── public/
```

## Future Enhancements (Planned)

### Stage 2
- [ ] Transaction categories
- [ ] Category-wise pie chart
- [ ] Dashboard summary cards
- [ ] Category-based filtering

### Stage 3
- [ ] Monthly budget setting
- [ ] Budget vs actual comparison
- [ ] Spending insights
- [ ] Export functionality

## Contributing

Feel free to submit issues and enhancement requests!