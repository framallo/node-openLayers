
git submodule init
git submodule update

cd openlayers
git fetch
git checkout origin/2.x
cd build

python build.py -c none  full ../../lib/OpenLayers-full.js

# add node.js magic
cd ../../
cat build/suffix.js >> lib/OpenLayers-full.js

