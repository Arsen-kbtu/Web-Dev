// name = models.CharField(max_length=255)
// description = models.TextField()
// city = models.CharField(max_length=255)
// address = models.TextField()

export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}