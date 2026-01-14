# 🔬 Stomach Disease Detection (Polyp & Ulcer Detection)

> Deep learning system for detecting polyps and stomach ulcers from endoscopy images using YOLO11L with balanced dataset training.

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![YOLO11](https://img.shields.io/badge/YOLO11-Ultralytics-green)
![Medical AI](https://img.shields.io/badge/Medical-AI-red)

---

## 🎯 Features

- **Real-time Polyp Detection** from endoscopy images
- **Stomach Ulcer Classification** using YOLO11L
- **Balanced Training** on curated medical dataset
- **High Precision** validated through clinical testing

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Detection Model | YOLO11L |
| Framework | Ultralytics |
| Training | PyTorch |
| Visualization | OpenCV, Matplotlib |

---

## 📊 Results

| Metric | Score |
|--------|-------|
| mAP@50 | **0.89** |
| Precision | **91%** |
| Recall | **87%** |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/varunrana04/Binary-Classifiacation-Ulcer-Detection-Model.git
cd Binary-Classifiacation-Ulcer-Detection-Model

# Install dependencies
pip install ultralytics opencv-python

# Run inference
python detect.py --source your_image.jpg
```

---

## 📁 Project Structure

```
├── models/              # Trained YOLO weights
├── data/               # Dataset configuration
├── notebooks/          # Training notebooks
├── detect.py          # Inference script
└── train.py           # Training script
```

---

## 📜 License

MIT License

---

## 📫 Contact

**Varun Rana** — [varunrana.business@gmail.com](mailto:varunrana.business@gmail.com)
