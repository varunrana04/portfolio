# 🛡️ FraudShield (Credit Card Fraud Detection)

> Financial anomaly detection system for identifying fraudulent credit card transactions using ensemble methods on highly imbalanced datasets.

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-ML-orange)
![FinTech](https://img.shields.io/badge/FinTech-Fraud_Detection-red)

---

## 🎯 Features

- **Imbalanced Data Handling** using SMOTE and undersampling
- **Ensemble Methods** for robust fraud detection
- **Feature Engineering** on transaction patterns
- **Real-time Scoring** capability

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| ML Models | Random Forest, XGBoost, Isolation Forest |
| Imbalanced Learning | SMOTE, ADASYN |
| Framework | Scikit-learn, imbalanced-learn |
| Visualization | Matplotlib, Seaborn |

---

## 📊 Results

| Metric | Score |
|--------|-------|
| Precision | **95%** |
| Recall | **88%** |
| F1-Score | **0.91** |
| AUC-ROC | **0.97** |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/varunrana04/Credit-Card-Fraud.git
cd Credit-Card-Fraud

# Install dependencies
pip install -r requirements.txt

# Run training
python train.py

# Test on new data
python predict.py --input transactions.csv
```

---

## 📁 Project Structure

```
├── data/               # Transaction data
├── notebooks/          # EDA and experiments
├── src/
│   ├── preprocess.py  # Data preprocessing
│   ├── features.py    # Feature engineering
│   ├── train.py       # Model training
│   └── predict.py     # Fraud scoring
└── models/            # Saved models
```

---

## 📜 License

MIT License

---

## 📫 Contact

**Varun Rana** — [varunrana.business@gmail.com](mailto:varunrana.business@gmail.com)
