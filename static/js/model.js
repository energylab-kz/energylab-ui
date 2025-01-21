let dataId = null;
const API_URL = 'https://energylab.kz/api';

function checkHealth() {
  fetch(`${API_URL}/health`)
    .then(response => {
      if (!response.ok) {
        throw new Error('API is not working');
      }
    })
    .catch(error => {
      const statusElements = ['uploadStatus', 'analysisStatus', 'predictionStatus'];
      statusElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerText = `Error: ${error.message}`;
        }
      });
    });
}

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  checkHealth();

  const uploadForm = document.getElementById('uploadForm');
  const createAnalysisBtn = document.getElementById('createAnalysisBtn');
  const createPredictionBtn = document.getElementById('createPredictionBtn');
  const modelSelect = document.getElementById('modelSelect');

  // Prevent default form submission and handle file upload
  uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const uploadStatus = document.getElementById('uploadStatus');

    if (!file) {
      uploadStatus.innerText = 'Please select a file.';
      return;
    }

    const formData = new FormData();
    formData.append('file_object', file);

    uploadStatus.innerHTML = 'Uploading... <span class="loader"></span>';

    fetch(`${API_URL}/data/upload`, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Upload failed');
        }
      })
      .then(data => {
        dataId = data.data_id;
        uploadStatus.innerText = `Upload successful! Data ID: ${dataId}`;
      })
      .catch(error => {
        uploadStatus.innerText = `Error: ${error.message}`;
      });
  });

  // Analysis button event listener
  createAnalysisBtn.addEventListener('click', function() {
    const analysisStatus = document.getElementById('analysisStatus');
    const analysisIframe = document.getElementById('analysisIframe');

    if (!dataId) {
      analysisStatus.innerText = 'Please upload a file first.';
      return;
    }

    analysisStatus.innerHTML = 'Waiting for response... <span class="loader"></span>';

    fetch(`${API_URL}/data/${dataId}/analysis`, {
      method: 'GET'
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Analysis creation failed');
        }
      })
      .then(html => {
        analysisStatus.innerText = 'Analysis created successfully!';
        analysisIframe.contentWindow.document.open();
        analysisIframe.contentWindow.document.write(html);
        analysisIframe.contentWindow.document.close();
        analysisIframe.style.display = 'block';
      })
      .catch(error => {
        analysisStatus.innerText = `Error: ${error.message}`;
      });
  });

  // Prediction button event listener
  createPredictionBtn.addEventListener('click', function() {
    const predictionStatus = document.getElementById('predictionStatus');
    const predictionIframe = document.getElementById('predictionIframe');
    const selectedModel = modelSelect.value;

    if (!dataId) {
      predictionStatus.innerText = 'Please upload a file first.';
      return;
    }
    if (!selectedModel) {
      predictionStatus.innerText = 'Please select a model.';
      return;
    }

    predictionStatus.innerHTML = 'Waiting for response... <span class="loader"></span>';

    fetch(`${API_URL}/data/${dataId}/predictions/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ model_type: selectedModel, forecast_horizon: 48 })
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Prediction creation failed');
        }
      })
      .then(html => {
        predictionStatus.innerText = 'Prediction created successfully!';
        predictionIframe.contentWindow.document.open();
        predictionIframe.contentWindow.document.write(html);
        predictionIframe.contentWindow.document.close();
        predictionIframe.style.display = 'block';
      })
      .catch(error => {
        predictionStatus.innerText = `Error: ${error.message}`;
      });
  });

  // Fetch available models
  fetch(`${API_URL}/models`)
    .then(response => response.json())
    .then(data => {
      const models = data.models;
      models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    })
    .catch(error => {
      const predictionStatus = document.getElementById('predictionStatus');
      if (predictionStatus) {
        predictionStatus.innerText = `Error fetching models: ${error.message}`;
      }
    });
});
