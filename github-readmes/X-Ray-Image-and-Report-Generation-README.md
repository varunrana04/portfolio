# 🫁 Pneumonia Detector (X-Ray Image & Report Generation)

> Automated radiology diagnostic system combining YOLOv8 for pneumonia detection with Transformer-based NLP for medical report generation.

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange?logo=tensorflow)
![YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-green)
![Gradio](https://img.shields.io/badge/Gradio-UI-yellow)

---

## 🎯 Features

- **Automated Pneumonia Detection** from chest X-rays using YOLOv8
- **NLP Report Generation** using Transformer models
- **Interactive UI** with Gradio for easy inference
- **93% Detection Accuracy** validated on clinical data

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Object Detection | YOLOv8 |
| Report Generation | HuggingFace Transformers |
| Frontend | Gradio |
| Backend | Python, TensorFlow/Keras |

---

## 📊 Results

| Metric | Score |
|--------|-------|
| Detection Accuracy | **93%** |
| Report BLEU Score | **0.87** |
| Inference Time | < 2 seconds |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/varunrana04/X-Ray-Image-and-Report-Generation.git
cd X-Ray-Image-and-Report-Generation

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

---

## 📁 Project Structure

```
├── models/              # Trained model weights
├── notebooks/           # Training notebooks
├── app.py              # Gradio application
├── inference.py        # Inference pipeline
└── requirements.txt    # Dependencies
```

---

## 📜 License

MIT License - feel free to use for research and educational purposes.

---

## 📫 Contact

**Varun Rana** — [varunrana.business@gmail.com](mailto:varunrana.business@gmail.com)
