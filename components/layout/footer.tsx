export function Footer() {
  return (
    <footer className="relative z-50 mt-16 overflow-hidden bg-gradient-to-br from-[#2c86ff] to-[#1a5fd4] text-white">
      {/* Wave decoration at top */}
      <div className="absolute left-0 right-0 top-0 h-12 -translate-y-full">
        <svg className="h-full w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,60 350,80 600,60 C850,40 1050,80 1200,40 L1200,120 L0,120 Z" fill="url(#footerGradient)" />
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2c86ff" />
              <stop offset="100%" stopColor="#1a5fd4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hệ thống đánh giá nhân viên học việc</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Giải pháp quản lý và đánh giá hiệu suất nhân viên học việc toàn diện, giúp doanh nghiệp theo dõi và phát triển
              nhân tài một cách hiệu quả.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/" className="transition-colors hover:text-white">
                  Tổng quan
                </a>
              </li>
              <li>
                <a href="/trainees" className="transition-colors hover:text-white">
                  Danh sách thực tập sinh
                </a>
              </li>
              <li>
                <a href="/reports" className="transition-colors hover:text-white">
                  Báo cáo
                </a>
              </li>
              <li>
                <a href="/criteria" className="transition-colors hover:text-white">
                  Cài đặt tiêu chí
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: support@cehsoft.com</li>
              <li>Điện thoại: (84) 123-456-789</li>
              <li>Địa chỉ: CEH Building, 107 Bến Vân Đồn, Phường Khánh Hội, TP Hồ Chí Minh.</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
            <p>© 2025 Hệ thống đánh giá nhân viên học việc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">
                Chính sách bảo mật
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
