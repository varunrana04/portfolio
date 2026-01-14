# 📈 PredictIQ (Sales Forecasting Model)

> Enterprise demand forecasting system for M5 Competition. Hierarchical time-series prediction for retail sales across departments and stores.

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![XGBoost](https://img.shields.io/badge/XGBoost-Gradient_Boosting-green)
![Kaggle](https://img.shields.io/badge/Kaggle-M5_Competition-orange)

---

## 🎯 Features

- **Hierarchical Forecasting** across stores, departments, and items
- **Feature Engineering** with lag features, rolling statistics, and calendar effects
- **Ensemble Methods** combining XGBoost, LightGBM, and CatBoost
- **Kaggle M5 Competition** dataset

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| ML Models | XGBoost, LightGBM, CatBoost |
| Feature Engineering | Pandas, NumPy |
| Visualization | Matplotlib, Plotly |
| Data Processing | Dask (for large datasets) |

---

## 📊 Key Features

- 📅 **Calendar Features**: Holidays, weekends, events
- 📉 **Lag Features**: 7, 14, 28-day lags
- 📊 **Rolling Statistics**: Moving averages, std deviation
- 🏪 **Store-level Aggregation**: Hierarchical predictions

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/varunrana04/Sales-Forecasting-Model.git
cd Sales-Forecasting-Model

# Install dependencies
pip install -r requirements.txt

# Run training
python train.py

# Generate predictions
python predict.py
```

---

## 📁 Project Structure

```
├── data/               # M5 competition data
├── notebooks/          # EDA and experiments
├── src/
│   ├── features.py    # Feature engineering
│   ├── train.py       # Model training
│   └── predict.py     # Inference
└── models/            # Saved models
```

---

## 📜 License

MIT License

---

## 📫 Contact

**Varun Rana** — [varunrana.business@gmail.com](mailto:varunrana.business@gmail.com)
