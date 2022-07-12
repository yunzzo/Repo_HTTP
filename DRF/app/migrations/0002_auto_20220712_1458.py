# Generated by Django 3.2.11 on 2022-07-12 05:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='friendinfo',
            name='MBTI',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
        migrations.AddField(
            model_name='friendinfo',
            name='birthday',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.AddField(
            model_name='friendinfo',
            name='group',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='friendinfo',
            name='how2call',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='friendinfo',
            name='cellNum',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
        migrations.CreateModel(
            name='Taste',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=10)),
                ('contents', models.TextField(blank=True, null=True)),
                ('TasteOf', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend', to='app.friendinfo')),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
