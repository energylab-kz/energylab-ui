<!-- interactive section -->
<div class="container mb-5 py-5" id="projectInteractive">
    <h1 class="mb-4 text-center fw-bold display-4 border-bottom border-secondary border-opacity-10">Interactive</h1>
    <h2 class="mb-3">Map of electric power stations</h2>
    <div class="mb-5 card shadow-lg" id="mapsCards">
      <div class="card-body">
        <div class="mb-4" id="maps">
          <iframe
            id="contentIframe"
            width="100%"
            height="600vh"
            border="none"
            src="../../maps/energy_stations_map.html"
          ></iframe>
        </div>
        <div class="row g-2" role="group" aria-label="Iframe Control Buttons">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/energy_stations_map.html')">Energy station lines</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/common_map.html')">Power plant types</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/wind_map.html')">Wind</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/coal_map.html')">Coal</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/gas_map.html')">Gas</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/pv_map.html')">PV</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/hydro_map.html')">Hydro</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mb-3">Region diagrams</h2>
    <div class="mb-5 card shadow-lg" id="regionDiagrams">
      <div class="card-body">
        <div class="mb-2 text-center" id="diagramsDescription">
          <h2 id="chartTitle">Akmola region</h2>
          <!-- <p>Description for Akmola region</p> -->
        </div>
        <div class="mb-4" id="diagramsContainer">
          <canvas id="chart" width="400" height="400"></canvas>
          <!-- <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/energy_stations_map.html')">Energy station lines</button> -->
        </div>
        <div class="row g-2" id="regionButtons">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="0">Akmola region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="1">Aktobe region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="2">Almaty region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="3">Atyrau region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="4">East Kazakhstan region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="5">Zhambyl region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="6">Zhetysu region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="7">West Kazakhstan region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="8">Karaganda region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="9">Kostanay region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="10">Kyzylorda region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="11">Mangystau region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="12">Pavlodar region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="13">North Kazakhstan region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="14">Turkestan region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="15">Ulytau region</button>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <button class="btn btn-outline-primary w-100" data-index="16">Abay region</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mb-3">Consumed energy charts</h2>
    <div class="mb-5 card shadow-lg" id="energyCharts">
      <div class="card-body">
        <div id="consumed_chart_container" style="width:100%; height:400px;"></div>
      </div>
    </div>

    <!-- TODO: Drag and drop a file -->
    <!-- border, padding, border radius -->
    <h2 class="mb-3">Data analysis and prediction modeling</h2>
    <div class="card shadow-lg" id="analysisModeling">
      <div class="card-body">
        <form id="uploadForm" enctype="multipart/form-data">
          <div class="mb-3">
            <i class="fas fa-upload"></i>
            <label for="formFile" class="form-label">Upload file: .csv, .xlsx, .xls, .json</label>
            <input class="form-control" type="file" id="fileInput" name="file_object" accept=".csv, .xlsx, .xls, .json">
          </div>
          <button type="submit" class="btn btn-outline-primary">Upload</button>
        </form>
      
      <div class="mt-3" id="uploadStatus"></div>
        <pre class="mb-3 bg-light p-3 rounded">
Example of expected file format:
date,object_name,plan,fact,unit,cloudiness,temperature,wind_speed
2023-01-01 01:00:00,Zadarya,0,0,MWh,4.0,-4.0,2.0
2023-01-01 02:00:00,Zadarya,0,0,MWh,4.0,-4.0,2.0
2023-01-01 03:00:00,Zadarya,0,0,MWh,4.0,-3.0,2.0
2023-01-01 04:00:00,Zadarya,"0,039","0,002",MWh,4.0,-2.0,2.0
2023-01-01 05:00:00,Zadarya,"0,219","0,487",MWh,4.0,0.0,2.0</pre>
        <div class="row g-4">
          <div class="col-lg-6">
              <div class="card">
                  <div class="card-body">
                      <button id="createAnalysisBtn" class="btn btn-outline-primary w-100">Create analysis</button>
                      <div id="analysisStatus" class="mt-3"></div>
                  </div>
              </div>
          </div>
          <div class="col-lg-6">
              <div class="card">
                  <div class="card-body">
                      <select id="modelSelect" class="form-select mb-3">
                          <option value="">Select a model</option>
                      </select>
                      <button id="createPredictionBtn" class="btn btn-outline-primary w-100">Run prediction</button>
                      <div id="predictionStatus" class="mt-3"></div>
                  </div>
              </div>
          </div>
        </div>

        <iframe id="analysisIframe" style="display: none; width: 100%; height: 700px; border: none; margin-top: 20px;"></iframe>
        <iframe id="predictionIframe" style="display: none; width: 100%; height: 700px; border: none; margin-top: 20px;"></iframe>

      </div>
    </div>

  </div>


  <!-- interactive section -->
    <div class="container mb-5 py-5" id="projectInteractive">
      <h1 class="mb-4 text-center fw-bold display-4 border-bottom border-secondary border-opacity-10">Interactive</h1>
      <h2 class="mb-3">Map of electric power stations</h2>
      <div class="card shadow-lg" id="mapsCard">
        <div class="card-body">
          <div class="mb-4" id="maps">
            <iframe
              id="contentIframe"
              width="100%"
              height="600vh"
              border="none"
              src="../../maps/energy_stations_map.html"
            ></iframe>
          </div>
          <div class="row g-2" role="group" aria-label="Iframe Control Buttons">
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/energy_stations_map.html')">Energy station lines</button>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/common_map.html')">Power plant types</button>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/wind_map.html')">Wind</button>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/coal_map.html')">Coal</button>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/gas_map.html')">Gas</button>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/pv_map.html')">PV</button>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <button class="btn btn-outline-primary w-100" onclick="changeIframe('../../maps/hydro_map.html')">Hydro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
