import React from 'react';
import { X } from 'lucide-react';

interface VendorSwitchInfoProps {
  onClose: () => void;
}

const VendorSwitchInfo: React.FC<VendorSwitchInfoProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#1a2a3c] to-[#101522] rounded-2xl border border-blue-800 shadow-2xl p-8 max-w-2xl w-full relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={28} />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Accelerate Your AI Research</h2>
        <p className="text-lg text-gray-300 mb-6">
          Switching vendors can be a challenge, but it doesn't have to be. Inoglle provides a seamless transition by acting as your neutral data partner. We ensure your AI research and development pipelines continue without interruption, backed by reliable, high-quality data and expert support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#181f2a] p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold text-xl mb-2">Data Neutrality</h3>
            <p className="text-sm text-slate-400">Access unbiased, high-quality datasets tailored to your specific research needs.</p>
          </div>
          <div className="bg-[#181f2a] p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold text-xl mb-2">Expert Integration</h3>
            <p className="text-sm text-slate-400">Our specialists ensure a smooth integration with your existing AI models and infrastructure.</p>
          </div>
        </div>
        <div className="flex justify-center">
            <button 
                className="bg-white text-[#2563eb] font-bold px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-100 transition-transform transform hover:scale-105"
                onClick={onClose}
            >
                Contact Us to Get Started
            </button>
        </div>
      </div>
    </div>
  );
};

export default VendorSwitchInfo;