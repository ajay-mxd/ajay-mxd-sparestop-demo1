import React, { useState, useMemo } from 'react';
import { ShoppingCart, Search, Check, X, Car, Calendar, Package, ChevronDown, Trash2, Plus, Minus } from 'lucide-react';

// Data from PDFs
const vehiclesData = [
  { id: "MSSWFT001", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "LXI BSVI (Petrol Manual)" },
  { id: "MSSWFT002", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "LXI (Petrol Manual)" },
  { id: "MSSWFT003", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "VXI BSVI (Petrol Manual)" },
  { id: "MSSWFT004", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "VXI (Petrol Manual)" },
  { id: "MSSWFT005", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "VXI AMT BSVI (Petrol AMT Automatic)" },
  { id: "MSSWFT006", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "ZXI BSVI (Petrol Manual)" },
  { id: "MSSWFT007", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "ZXI (Petrol Manual)" },
  { id: "MSSWFT008", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "VXI CNG BSVI (CNG Manual)" },
  { id: "MSSWFT009", make: "Maruti Suzuki", model: "Swift", year: 2021, variant: "ZXI CNG BSVI (CNG Manual)" },
  { id: "MSSWFT010", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "LXI BSVI (Petrol Manual)" },
  { id: "MSSWFT011", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "LXI (Petrol Manual)" },
  { id: "MSSWFT012", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "VXI BSVI (Petrol Manual)" },
  { id: "MSSWFT013", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "VXI (Petrol Manual)" },
  { id: "MSSWFT014", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "VXI AMT BSVI (Petrol AMT Automatic)" },
  { id: "MSSWFT015", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "VXI AMT (Petrol AMT Automatic, facelift update)" },
  { id: "MSSWFT016", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI BSVI (Petrol Manual)" },
  { id: "MSSWFT017", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI (Petrol Manual)" },
  { id: "MSSWFT018", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI AMT BSVI (Petrol AMT Automatic)" },
  { id: "MSSWFT019", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI Plus BSVI (Petrol Manual)" },
  { id: "MSSWFT020", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI Plus Dual Tone (Petrol Manual)" },
  { id: "MSSWFT021", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI CNG BSVI (CNG Manual)" },
  { id: "MSSWFT022", make: "Maruti Suzuki", model: "Swift", year: 2022, variant: "ZXI Plus AMT BSVI (Petrol AMT Automatic)" },
  { id: "MSSWFT023", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "LXI (Petrol Manual)" },
  { id: "MSSWFT024", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "VXI AMT (Petrol AMT Automatic)" },
  { id: "MSSWFT025", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI (Petrol Manual)" },
  { id: "MSSWFT026", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI AMT (Petrol AMT Automatic)" },
  { id: "MSSWFT027", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI Plus (Petrol Manual)" },
  { id: "MSSWFT028", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI Plus AMT (Petrol AMT Automatic)" },
  { id: "MSSWFT029", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI Plus Dual Tone (Petrol Manual)" },
  { id: "MSSWFT030", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI Plus Dual Tone AMT (Petrol AMT Automatic)" },
  { id: "MSSWFT031", make: "Maruti Suzuki", model: "Swift", year: 2023, variant: "ZXI CNG (CNG Manual)" }
];

// Helper function to convert Google Drive links to direct image URLs
const convertDriveUrl = (url) => {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

const partsData = [
  {
    id: "P0001",
    name: "Air Filter",
    category: "Filters",
    price: 305.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1EXQ_f6-ft0ol_eglTSRAQHH2hFH1bldp/view?usp=sharing"),
    compatible: ["MSSWFT001", "MSSWFT002", "MSSWFT003", "MSSWFT004", "MSSWFT005", "MSSWFT006", "MSSWFT007", "MSSWFT008", "MSSWFT009"]
  },
  {
    id: "P0002",
    name: "Air Filter",
    category: "Filters",
    price: 315.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1Lq8564BxTbx7rR_Js0vtoWxxAx4rXNDF/view?usp=sharing"),
    compatible: ["MSSWFT010", "MSSWFT011", "MSSWFT012", "MSSWFT013", "MSSWFT014", "MSSWFT015", "MSSWFT016", "MSSWFT017", "MSSWFT018", "MSSWFT019", "MSSWFT020", "MSSWFT021", "MSSWFT022", "MSSWFT023", "MSSWFT024", "MSSWFT025", "MSSWFT026", "MSSWFT027", "MSSWFT028", "MSSWFT029", "MSSWFT030", "MSSWFT031"]
  },
  {
    id: "P0003",
    name: "Cabin Filter PM 2.5",
    category: "Filters",
    price: 599.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1F_9dsGYB8ihI1_UO4-kRFrGKJDL3qhbj/view?usp=sharing"),
    compatible: vehiclesData.map(v => v.id)
  },
  {
    id: "P0004",
    name: "Cabin Filter",
    category: "Filters",
    price: 357.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1VG-jGmwoUxXcjuFXmeWDmA-5swQTO6g3/view?usp=sharing"),
    compatible: vehiclesData.map(v => v.id)
  },
  {
    id: "P0005",
    name: "Oil Filter",
    category: "Filters",
    price: 99.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1peJ3GTKLjno16UPsUXm5H9duzwXnWjIU/view?usp=sharing"),
    compatible: ["MSSWFT010", "MSSWFT011", "MSSWFT012", "MSSWFT013", "MSSWFT014", "MSSWFT015", "MSSWFT016", "MSSWFT017", "MSSWFT018", "MSSWFT019", "MSSWFT020", "MSSWFT021", "MSSWFT022", "MSSWFT023", "MSSWFT024", "MSSWFT025", "MSSWFT026", "MSSWFT027", "MSSWFT028", "MSSWFT029", "MSSWFT030", "MSSWFT031"]
  },
  {
    id: "P0006",
    name: "Oil Filter",
    category: "Filters",
    price: 675.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1ujk8FRyHLDMra37i-Ee87hDrSuNIbmgG/view?usp=sharing"),
    compatible: ["MSSWFT001", "MSSWFT002", "MSSWFT003", "MSSWFT004", "MSSWFT005", "MSSWFT006", "MSSWFT007", "MSSWFT008", "MSSWFT009"]
  },
  {
    id: "P0007",
    name: "Ecstar 0w-16 3.5L",
    category: "Engine Oil",
    price: 1680.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1g1SOWHgjDoufByTHK1skcRyJk2FYfi1F/view?usp=drive_link"),
    compatible: ["MSSWFT001", "MSSWFT002", "MSSWFT003", "MSSWFT004", "MSSWFT005", "MSSWFT006", "MSSWFT007", "MSSWFT008", "MSSWFT009"]
  },
  {
    id: "P0008",
    name: "Ecstar 0w-20 3.5L",
    category: "Engine Oil",
    price: 1440.00,
    image: convertDriveUrl("https://drive.google.com/file/d/1g3M7LIhfqQrxChJxuElCOb1UmIFtiTBa/view?usp=drive_link"),
    compatible: ["MSSWFT010", "MSSWFT011", "MSSWFT012", "MSSWFT013", "MSSWFT014", "MSSWFT015", "MSSWFT016", "MSSWFT017", "MSSWFT018", "MSSWFT019", "MSSWFT020", "MSSWFT021", "MSSWFT022", "MSSWFT023", "MSSWFT024", "MSSWFT025", "MSSWFT026", "MSSWFT027", "MSSWFT028", "MSSWFT029", "MSSWFT030", "MSSWFT031"]
  }
];

const SparePartsSystem = () => {
  // Set body background color
  React.useEffect(() => {
    document.body.style.backgroundColor = '#111827';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const makes = useMemo(() => [...new Set(vehiclesData.map(v => v.make))], []);
  const models = useMemo(() => 
    selectedMake ? [...new Set(vehiclesData.filter(v => v.make === selectedMake).map(v => v.model))] : []
  , [selectedMake]);
  const years = useMemo(() => 
    selectedModel ? [...new Set(vehiclesData.filter(v => v.make === selectedMake && v.model === selectedModel).map(v => v.year))].sort((a, b) => b - a) : []
  , [selectedMake, selectedModel]);
  const variants = useMemo(() => 
    selectedYear ? vehiclesData.filter(v => v.make === selectedMake && v.model === selectedModel && v.year === selectedYear).map(v => ({ id: v.id, variant: v.variant })) : []
  , [selectedMake, selectedModel, selectedYear]);

  const selectedVehicle = useMemo(() => 
    vehiclesData.find(v => v.id === selectedVariant)
  , [selectedVariant]);

  const categories = useMemo(() => ['All', ...new Set(partsData.map(p => p.category))], []);

  const filteredParts = useMemo(() => {
    let filtered = partsData;
    
    if (selectedVariant) {
      filtered = filtered.filter(part => part.compatible.includes(selectedVariant));
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(part => part.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(part => 
        part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedVariant, selectedCategory, searchTerm]);

  const addToCart = (part) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === part.id);
      if (existing) {
        return prev.map(item => 
          item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...part, quantity: 1 }];
    });
  };

  const updateQuantity = (partId, delta) => {
    setCart(prev => {
      const updated = prev.map(item => 
        item.id === partId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      );
      return updated;
    });
  };

  const removeFromCart = (partId) => {
    setCart(prev => prev.filter(item => item.id !== partId));
  };

  const cartTotal = useMemo(() => 
    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  , [cart]);

  const resetVehicle = () => {
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYear('');
    setSelectedVariant('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{backgroundColor: '#111827'}}>
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8 text-[#00cc66]" />
            <h1 className="text-2xl font-bold text-white">SpareHub</h1>
          </div>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="relative p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00cc66] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Vehicle Selection */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 shadow-xl">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <Car className="w-6 h-6 text-[#00cc66]" />
            Select Your Vehicle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <select 
              value={selectedMake}
              onChange={(e) => {
                setSelectedMake(e.target.value);
                setSelectedModel('');
                setSelectedYear('');
                setSelectedVariant('');
              }}
              className="bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00cc66] focus:ring-2 focus:ring-[#00cc66]/20 transition-colors"
            >
              <option value="">Select Make</option>
              {makes.map(make => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>

            <select 
              value={selectedModel}
              onChange={(e) => {
                setSelectedModel(e.target.value);
                setSelectedYear('');
                setSelectedVariant('');
              }}
              disabled={!selectedMake}
              className="bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00cc66] focus:ring-2 focus:ring-[#00cc66]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select Model</option>
              {models.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>

            <select 
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(Number(e.target.value));
                setSelectedVariant('');
              }}
              disabled={!selectedModel}
              className="bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00cc66] focus:ring-2 focus:ring-[#00cc66]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select 
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              disabled={!selectedYear}
              className="bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00cc66] focus:ring-2 focus:ring-[#00cc66]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select Variant</option>
              {variants.map(v => (
                <option key={v.id} value={v.id}>{v.variant}</option>
              ))}
            </select>
          </div>

          {selectedVehicle && (
            <div className="bg-[#00cc66]/10 border-2 border-[#00cc66] rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00cc66]" />
                <div>
                  <p className="font-semibold text-[#00cc66]">Vehicle Selected</p>
                  <p className="text-sm text-white">{selectedVehicle.make} {selectedVehicle.model} {selectedVehicle.year} - {selectedVehicle.variant}</p>
                </div>
              </div>
              <button 
                onClick={resetVehicle}
                className="text-sm text-white hover:text-[#00cc66] transition-colors"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search parts by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-[#00cc66] focus:ring-2 focus:ring-[#00cc66]/20 transition-colors placeholder-gray-400"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-[#00cc66] text-black font-semibold' 
                      : 'bg-[#0d0f12] text-white hover:bg-gray-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredParts.map(part => {
            const isCompatible = !selectedVariant || part.compatible.includes(selectedVariant);
            
            return (
              <div 
                key={part.id}
                className={`bg-[#15191e] rounded-xl overflow-hidden border transition-all hover:shadow-lg hover:shadow-[#00cc66]/10 ${
                  isCompatible ? 'border-gray-800' : 'border-red-900/50'
                }`}
              >
                <div className="aspect-video bg-[#0d0f12] flex items-center justify-center overflow-hidden">
                  <img 
                    src={part.image} 
                    alt={part.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                    <Package className="w-16 h-16 text-gray-700" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{part.name}</h3>
                      <p className="text-sm text-gray-500">{part.id}</p>
                    </div>
                    <span className="bg-[#0d0f12] px-2 py-1 rounded text-xs text-white">{part.category}</span>
                  </div>
                  
                  <p className="text-2xl font-bold text-[#00cc66] mb-3">₹{part.price.toFixed(2)}</p>
                  
                  {selectedVariant && (
                    <div className={`flex items-center gap-2 mb-3 text-sm ${isCompatible ? 'text-[#00cc66]' : 'text-red-500'}`}>
                      {isCompatible ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Compatible</span>
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4" />
                          <span>Not Compatible</span>
                        </>
                      )}
                    </div>
                  )}
                  
                  <button
                    onClick={() => addToCart(part)}
                    disabled={!isCompatible && selectedVariant}
                    className="w-full bg-[#00cc66] hover:bg-[#00b359] text-black font-semibold py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-12 text-white">
            <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No parts found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowCart(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-[#15191e] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                  <button onClick={() => setShowCart(false)} className="text-white hover:text-[#00cc66]">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-white">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="bg-[#0d0f12] rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.id}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 bg-[#15191e] text-white rounded flex items-center justify-center hover:bg-gray-800"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold text-white">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 bg-[#15191e] text-white rounded flex items-center justify-center hover:bg-gray-800"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="font-bold text-[#00cc66]">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-gray-800 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-white">Total</span>
                    <span className="text-2xl font-bold text-[#00cc66]">₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#00cc66] hover:bg-[#00b359] text-black font-bold py-3 rounded-lg transition-colors">
                    Place Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SparePartsSystem;
