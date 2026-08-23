import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <p className="text-sm font-semibold text-accent">Lỗi 404</p>
      <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
        Không tìm thấy trang
      </h1>
      <p className="max-w-md text-foreground/70">
        Trang bạn tìm không tồn tại hoặc đã được di chuyển. Hãy quay lại trang
        chủ để tiếp tục tìm hiểu về trung tâm.
      </p>
      <Button href="/" variant="primary" className="mt-2">
        Về trang chủ
      </Button>
    </section>
  );
}
